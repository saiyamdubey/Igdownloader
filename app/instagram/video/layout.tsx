import Description from "../description";

export default function RootLayout({
  video,
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
