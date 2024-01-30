"use client";

import React from "react";
import Description from "./description";
type Props = {};

export default function Page({}: Props) {
  return (
    <>
      <div className="text-8xl flex-row  overflow-hidden text-primary flex justify-center items-center h-fit">
        <div className="flex-col">
          <Description />
        </div>
      </div>
    </>
  );
}
