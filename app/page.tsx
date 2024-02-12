export default function DatePickerWithPresets({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex overflow-hidden flex-col items-center justify-between">
      {children}
    </main>
  );
}
