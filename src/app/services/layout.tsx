import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <div className="hidden">
        <ThemeSwitcher />
      </div>
    </>
  );
}
