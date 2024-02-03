import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

function Hero({}: Props) {
  return (
    <>
      <div className="  flex flex-col justify-start items-center m-auto w-[95%]">
        <div className="headlines  t">
          <h1 className="text-center text-5xl mt-12 relative mb-4 ">
            Instagram{"  "}
            <span className="relative ml-2">
              Downloader
              <span className="absolute bottom-0 left-1 w-full h-[2px]  bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-red-500 hover:from-yellow-400 hover:via-yellow-500 hover:to-green-500"></span>
            </span>
          </h1>
          <p className="text-2xl font-mono">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-red-500 hover:from-yellow-400 hover:via-yellow-500 hover:to-green-500">
              Download Instagram Video, Photos, Reels, and Profile Pictures with
              IG Downloader
            </span>
          </p>
        </div>
        <div className="linksheader text-[18px] bg-gray-400 2xl:w-[78%] mt-6 [&>a]:px-[52px] [&>a]:py-3 [&>a]:ml-2  rounded-xl flex flex-row justify-evenly items-center">
          <Link
            className=" hover:bg-gradient-to-r hover:from-red-300 hover:to-pink-500 rounded-xl"
            href="/instagram/story"
          >
            <Image
                          src={"instagram.svg"}
                          width={25}
                          height={25}
                          alt="ig"
                          className="mx-2"
                        />
            Highlights
          </Link>

          <Link
            className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 rounded-xl"
            href="/instagram/reel"
          >
            Reels
          </Link>
          <Link
            className="hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 rounded-xl"
            href="/instagram/story"
          >
            Corausol
          </Link>
          <Link
            className="hover:bg-gradient-to-r hover:from-red-400 hover:to-red-500 rounded-xl"
            href="/instagram/video "
          >
            Video
          </Link>
          <Link
            className="hover:bg-gradient-to-r hover:from-green-400 hover:to-green-500 rounded-xl"
            href="/instagram/igtv"
          >
            Igtv
          </Link>
          <Link
            className="hover:bg-gradient-to-r hover:from-indigo-400 hover:to-indigo-500 rounded-xl"
            href="/instagram/post"
          >
            Posts
          </Link>
          <Link
            className=" hover:bg-gradient-to-r hover:from-pink-700 hover:to-yellow-500  rounded-xl"
            href="/instagram/post"
          >
            Photo
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
