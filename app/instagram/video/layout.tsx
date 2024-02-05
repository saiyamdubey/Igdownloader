
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  video: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col overflow-hidden">
      {children}
    </main>
  );
}
