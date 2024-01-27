"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

type Props = {};

function Navbar({}: Props) {
  const { setTheme } = useTheme();

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
  };

  return (
    <div className=" max-w-9xl w-full items-center justify-evenly font-mono text-lm lg:flex border-orange-400 border-b-[1px]  ">
      <div className="flex flex-row logo mb-3 hover:italic">
        <h2 className="scroll-m-10  text-3xl font-bold tracking-wider first:mt-0 text-primary">
          Insta
        </h2>
        <h3 className="scroll-m-10 text-3xl font-semibold tracking-widest ">
          down
        </h3>
        <h3 className="scroll-m-10 text-2.5xl font-semibold tracking-widest ">
          .io
        </h3>
      </div>
      <div className="links flex flex-row">
        <div className="mainlinks  ml-16">
          <ul className="flex my-2 ml-8  [&>li]:mr-5 [&>li]:font-semibold [&>li]:cursor-pointer  [&>li]:border-orange-200">
            <li className="hover:border-b-[1px] pb-[0px]">
              Instagram Downloader
            </li>
            <li className="hover:border-b-[1px] pb-0">Youtube Downloder</li>
            <li className="hover:border-b-[1px] pb-0">Pinterest Downloader</li>
            <li className="hover:border-b-[1px] pb-0">Tiktok Downloader</li>
          </ul>
        </div>
        <div className="darkmode mb-2 mt-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon
                  onClick={() => handleThemeChange("dark")}
                  className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 border-none"
                />
                <MoonIcon
                  onClick={() => handleThemeChange("light")}
                  className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 border-none"
                />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
