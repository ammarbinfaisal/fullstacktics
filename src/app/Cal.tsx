const Cal = ({
    children
}: {
    children: React.ReactNode;
}) => {
    function gtag_report_conversion(url: string) {
        const callback = function () {
            if (typeof (url) != 'undefined') {
                // @ts-expect-error - TS doesn't know if window.location is a string
                window.location = url;
            }
        };
        // @ts-expect-error - TS doesn't know if gtag is a function
        gtag('event', 'conversion', {
            'send_to': 'AW-11298597203/11cmCMvtmvYZENPSy4sq',
            'value': 10.0,
            'currency': 'INR',
            'event_callback': callback
        });
        return false;
    }
    return (
        <div onClick={() => gtag_report_conversion('https://cal.com/fullstacktics/consultation')}>
            {children}
        </div>
    )
}

export default Cal
