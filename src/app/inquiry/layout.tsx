export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1A1A2E] to-[#0F0F1A] text-white py-12 md:py-24">
            <div className="container mx-auto px-4">
                {children}
            </div>
        </div>
    )
}