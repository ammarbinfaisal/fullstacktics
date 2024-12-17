"use client";

import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import { useCallback, useEffect } from "react";

const Cal = ({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "consultation" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
            // @ts-expect-error - TS doesn't know if gtag is a function
            gtag('event', 'conversion', {
                'send_to': 'AW-11298597203/11cmCMvtmvYZENPSy4sq',
                'value': 100.0,
                'currency': 'USD',
            });
        })();
    }, []);

    return (
        <Button className={className} data-cal-namespace="consultation"
            data-cal-link="fullstacktics/consultation"
            data-cal-config='{"layout":"month_view"}'
        >
            {children}
        </Button>
    )
}

export default Cal
