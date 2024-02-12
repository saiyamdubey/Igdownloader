export default function Page({ children }: any) {
  return (
    <main className="flex overflow-hidden flex-col items-center justify-between">
      {children}
    </main>
  );
}
