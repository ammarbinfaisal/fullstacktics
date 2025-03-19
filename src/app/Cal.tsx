"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Cal = ({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    function gtag_report_conversion() {
        // @ts-expect-error - TS doesn't know if gtag is a function
        gtag('event', 'conversion', {
            'send_to': 'AW-11298597203/US23CP348pYaENPSy4sq',
            'value': 5.0,
            'currency': 'USD',
            'event_callback': () => console.log('Conversion reported!')
        });
        return false;
    }

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "consult" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    return (
        <div className={className} data-cal-namespace="consult"
            data-cal-link="fullstacktics/consult"
            data-cal-config='{"layout":"month_view"}'
            onClick={gtag_report_conversion}
        >
            {children}
        </div >
    )
}

export default Cal
