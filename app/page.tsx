import Navbar from "@/components/navbar";
import * as React from "react";
import Footerdemo from "@/components/footer"


export default function DatePickerWithPresets({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-dvh w-dvw overflow-hidden flex-col items-center justify-between">
      <Navbar />
      {children}
      
      <Footerdemo/>
    </main>
  );
}
