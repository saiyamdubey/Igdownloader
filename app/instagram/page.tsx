"use client";

import React, { Children } from "react";
import Description from "./description";
type Props = {};

export default function Page({}: Props) {
  return (
    <>
      <div className="text-8xl flex-wrap  text-wrap overflow-hidden text-primary flex justify-center items-center h-fit">
        <Description />
      </div>
    </>
  );
}
