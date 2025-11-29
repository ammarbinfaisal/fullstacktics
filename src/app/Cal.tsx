"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

const Cal = ({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    function gtag_report_conversion() {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'click_cal', {
                'event_category': 'cal',
                'event_label': 'click_cal',
                'value': 1
            });
        }
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
