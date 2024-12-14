"use client";

const Cal = ({
    children,
    url,
    className
}: {
    children: React.ReactNode;
    url: string;
    className?: string;
}) => {
    function gtag_report_conversion() {
        const callback = function () {
            if (typeof (url) != 'undefined') {
                window.open(url, '_blank');
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
        <div onClick={() => gtag_report_conversion()} className={className}>
            {children}
        </div>
    )
}

export default Cal
