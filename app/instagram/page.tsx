"use client";

import React from "react";
import Hero from "./hero";
type Props = {};

export default function Page({}: Props) {
  return (
    <>
      <div className=" flex-row  overflow-hidden flex justify-center items-center">
        <div className="flex-col">
          <Hero />
          
        </div>
      </div>
    </>
  );
}

// export default function IglinksLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <section>
//       <h1>saiyam dubey</h1>
//       {children}
//     </section>
//   );
// }
