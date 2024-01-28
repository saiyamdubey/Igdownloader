"use client";

import React from "react";
import Typing from "@/components/typing";
import FooterDemo from "@/components/footer";
type Props = {};

export default function Page({}: Props) {
  return (
    <>
      <div className="text-6xl flex-wrap  text-wrap overflow-hidden text-primary flex justify-center items-center w-dvw  h-svh">
        <Typing />
      </div>
      <FooterDemo />
    </>
  );
}
