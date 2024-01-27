"use client";

import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosLink } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { GiMoneyStack } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
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
    <div className="2xl:flex w-dvw sm:flex sm:justify-between items-center justify-evenly font-mono sm:p-2  border-orange-300 border-b-[1px] ">
      <div className="logo mb-3 sm:ml-8 sm:mt-3  ">
        <Link className="flex" href="/" prefetch={true}>
          <h2 className="scroll-m-10 sm:text-[20px] 2xl:text-3xl font-bold tracking-wider first:mt-0 text-primary hover:italic">
            Insta
          </h2>
          <h3 className="scroll-m-10 sm:text-[20px] 2xl:text-3xl font-bold tracking-widest ">
            down
          </h3>
          <h3 className="scroll-m-10 sm:text-[10px] 2xl:text-[14px] font-bold tracking-widest ">
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
        <div className="darkmode sm:mr-4 sm:flex 2xl:flex  justify-center items-center">
          <div className="2xl:hidden">
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
                    <ul className="flex my-2 ml-2 sm:flex-col [&>a]:mr-6 [&>a]:font-semibold sm:items-center [&>a]:cursor-pointer [&>a]:mt-7 sm:text-[16px] [&>]:border-orange-500">
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
                          width={30}
                          className="mx-2"
                          height={30}
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
                          width={22}
                          height={22}
                          className="mx-2"
                          alt="fb"
                        />
                        Facebook Downloader
                      </Link>
                    </ul>
                    <div className="sm:mt-10">
                      <Button className="sm:ml-6 sm:justify-between sm:text-[18px] sm:p-7 sm:font-extrabold">
                        <GiMoneyStack className="mr-1 pr-2 h-10 w-10" /> Donate
                        Me
                      </Button>
                    </div>
                    <div className="sociallink sm:flex sm:mt-40 sm:justify-evenly border-t-[1px] pt-5">
                      <Link
                        className="hover:border-b-[1px] pb-0 sm:flex sm:justify-between sm:items-center"
                        href="https://github.com/saiyamdubey/"
                      >
                        <Image
                          src={"github.svg"}
                          width={45}
                          height={45}
                          className="mx-2"
                          alt="fb"
                        />
                      </Link>
                      <Link
                        className="hover:border-b-[1px] pb-0 sm:flex sm:justify-between sm:items-center"
                        href="https://twitter.com/Saiyam02079791"
                      >
                        <Image
                          src={"twitterbird.svg"}
                          width={45}
                          height={45}
                          className="mx-2"
                          alt="fb"
                        />
                      </Link>

                      <Link
                        className="hover:border-b-[1px] pb-0 sm:flex sm:justify-between sm:items-center"
                        href="https://www.linkedin.com/in/saiyam-dubey-77a5371b8/"
                      >
                        <Image
                          src={"linkedin.svg"}
                          width={43}
                          height={43}
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
          <div className="sm:hidden 2xl:mr-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link">
                  <div className="dropdown sm:mt-3 sm:mr-3 flex-row justify-center items-center">
                    <RiArrowDropDownLine size={35} />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Social Accounts</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Billing
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Keyboard shortcuts
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      Invite users
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Email</DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>More...</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    New Team
                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem disabled>API</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon">
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
