"use client";

import React from "react";
import Description from "./description";
import Hero from "./hero";
type Props = {};

export default function Page({}: Props) {
  return (
    <>
      <div className=" flex-row  overflow-hidden flex justify-center items-center">
        <div className="flex-col">
          <Hero />
          <Description />
        </div>
      </div>
    </>
  );
}
