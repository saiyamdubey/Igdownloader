// import * as React from "react";

export default function DatePickerWithPresets({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex overflow-hidden flex-col items-center justify-between">
      {children}
    </main>
  );
}
