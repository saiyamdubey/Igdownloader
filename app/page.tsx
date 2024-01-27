import Navbar from "@/components/navbar";
import * as React from "react";

export default function DatePickerWithPresets({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-svw overflow-hidden flex-col items-center justify-between p-2">
      <Navbar />
      {children}
    </main>
  );
}
