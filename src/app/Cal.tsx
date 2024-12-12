"use client";

const Cal = ({
    children,
    url
}: {
    children: React.ReactNode;
    url: string;
}) => {
    function gtag_report_conversion() {
        const callback = function () {
            if (typeof (url) != 'undefined') {
                // @ts-expect-error - TS doesn't know if window.location is a string
                window.location = url;
            }
        };
        try{
            // @ts-expect-error - TS doesn't know if gtag is a function
            gtag('event', 'conversion', {
                'send_to': 'AW-11298597203/11cmCMvtmvYZENPSy4sq',
                'value': 10.0,
                'currency': 'INR',
                'event_callback': callback
            });
        } finally {
            callback();
        }
        return false;
    }
    return (
        <div onClick={() => gtag_report_conversion()}>
            {children}
        </div>
    )
}

export default Cal
