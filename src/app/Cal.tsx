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
        gtag('event', 'click_cal', {
            'event_category': 'cal',
            'event_label': 'click_cal',
            'value': 1
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
