"use client";

import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosLink } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { FaLinkedin } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

type Props = {};

function Navbar({}: Props) {
  const { setTheme } = useTheme();

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
  };

  return (
    <div className="w-dvw xl:flex-col sm:flex sm:justify-between items-center  justify-evenly font-mono sm:p-2  border-orange-300 border-b-[1px] ">
      <div className="logo mb-3 sm:ml-8 sm:mt-3">
        <Link className="flex" href="/" prefetch={true}>
          <h2 className="scroll-m-10 sm:text-[20px] 2xl:text-3xl font-bold tracking-wider first:mt-0 text-primary hover:italic">
            Insta
          </h2>
          <h3 className="scroll-m-10 sm:text-[20px] 2xl:text-3xl font-bold tracking-widest ">
            down
          </h3>
          <h3 className="scroll-m-10 sm:text-[10px] 2xl:text-[10px] font-bold tracking-widest ">
            .io
          </h3>
        </Link>
      </div>
      <div className="links flex flex-row">
        <div className="mainlinks ml-4">
          <ol className="flex my-2 ml-8 sm:hidden  [&>a]:mr-8 [&>a]:font-semibold [&>a]:cursor-pointer  [&>]:border-orange-200">
            <Link
              className="hover:border-b-[1px] pb-0"
              href="/instagram/"
              prefetch={true}
            >
              Instagram Downloader
            </Link>
            <Link
              className="hover:border-b-[1px] pb-0"
              href="/youtube"
              prefetch={true}
            >
              Youtube Downloader
            </Link>

            <Link
              className="hover:border-b-[1px] pb-0"
              href="/pinterest"
              prefetch={true}
            >
              Pinterest Downloader
            </Link>

            <Link
              className="hover:border-b-[1px] pb-0"
              href="/tiktok"
              prefetch={true}
            >
              Tiktok Downloader
            </Link>
          </ol>
        </div>
        <div className="darkmode sm:mr-4 sm:flex justify-center items-center">
          <div>
            <Sheet key={"top"}>
              <SheetTrigger>
                <div className="dropdown sm:mt-3 sm:mr-3 flex-row justify-center items-center">
                  <RiArrowDropDownLine size={38} />
                </div>
              </SheetTrigger>
              <SheetContent className="pt-10" side={"right"}>
                <SheetHeader>
                  <SheetTitle
                    style={{
                      fontSize: "1.3em",
                      marginLeft: "0rem",
                      marginTop: "4rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <div className="flex justify-evenly">
                      <IoIosLink />
                      <h1>More Searched links</h1>
                    </div>
                  </SheetTitle>
                  <SheetDescription>
                    <ol className="flex my-2 ml-2 sm:flex-col [&>a]:mr-6 [&>a]:font-semibold sm:place-items-start [&>a]:cursor-pointer [&>a]:mt-7 sm:text-[16px] [&>]:border-orange-500">
                      <Link
                        className="hover:border-b-[1px] flex items-center"
                        href="/instagram"
                        prefetch={true}
                      >
                        <Image
                          src={"instagram.svg"}
                          width={25}
                          height={25}
                          alt="ig"
                          className="mx-2"
                        />
                        Instagram Downloader
                      </Link>
                      <Link
                        className="hover:border-b-[1px] pb-0 sm:flex sm:items-center"
                        href="/youtube"
                        prefetch={true}
                      >
                        <Image
                          src={"youtube.svg"}
                          width={25}
                          height={25}
                          className="mx-2"
                          alt="yt"
                        />
                        Youtube Downloader
                      </Link>

                      <Link
                        className="hover:border-b-[1px] pb-0 sm:flex sm:justify-between sm:items-center"
                        href="/pinterest"
                        prefetch={true}
                      >
                        <Image
                          src={"pinterest.svg"}
                          width={25}
                          className="mx-2"
                          height={25}
                          alt="pt"
                        />
                        Pinterest Downloader
                      </Link>

                      <Link
                        className="hover:border-b-[1px] pb-0 sm:flex sm:justify-between sm:items-center"
                        href="/tiktok"
                        prefetch={true}
                      >
                        <Image
                          src={"tiktok.svg"}
                          width={25}
                          className="mx-2"
                          height={25}
                          alt="tk"
                        />
                        Tiktok Downloader
                      </Link>
                      <Link
                        className="hover:border-b-[1px] pb-0 sm:flex sm:justify-between sm:items-center"
                        href="/tiktok"
                        prefetch={true}
                      >
                        <Image
                          src={"facebook.svg"}
                          width={25}
                          height={25}
                          className="mx-2"
                          alt="fb"
                        />
                        Facebook Downloader
                      </Link>
                    </ol>
                    <div className="sm:mt-10">
                      <Button className="sm:ml-6 sm:justify-between sm:text-[18px] sm:p-7 sm:font-extrabold">
                        <GiMoneyStack className="mr-1 pr-2 h-10 w-10" /> Donate
                        Me
                      </Button>
                    </div>
                    <div className="sociallink flex ">
                      <Link
                        className="hover:border-b-[1px] pb-0 sm:flex sm:justify-between sm:items-center"
                        href="https://github.com/saiyamdubey/"
                        prefetch={true}
                      >
                        <Image
                          src={"github.svg"}
                          width={60}
                          height={60}
                          className="mx-2"
                          alt="fb"
                        />
                      </Link>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" size="icon">
                  <SunIcon
                    onClick={() => handleThemeChange("dark")}
                    className="h-[1.5rem] w-[1.5rem] sm:h-[1.2rem] sm:w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 border-none"
                  />
                  <MoonIcon
                    onClick={() => handleThemeChange("light")}
                    className="absolute h-[1.5rem] w-[1.5rem] sm:h-[1.2rem] sm:w-[1.2rem]  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 border-none"
                  />
                </Button>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
