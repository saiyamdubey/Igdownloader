import Navbar from "@/components/navbar";
import * as React from "react";
import Footer from "@/components/footer";

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
