"use client";

import React from "react";
import Description from "./description";
type Props = {};

export default function Page({}: Props) {
  return (
    <>
      <div className=" flex-row  overflow-hidden flex justify-center items-center">
        <div className="flex-col">
          <Description />
        </div>
      </div>
    </>
  );
}
