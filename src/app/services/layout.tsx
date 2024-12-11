export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <script dangerouslySetInnerHTML={{
                __html: `
  gtag('event', 'conversion', {'send_to': 'AW-11298597203/ds5tCNjRvd0ZENPSy4sq'});
        `,
            }}>
            </script>
            {children}
        </>
    );
}
