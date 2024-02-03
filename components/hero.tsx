import React from "react";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  return (
    <>
      <div className="h-[60vh]  flex flex-col justify-start items-center m-auto w-[95%]">
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
        <div className="linksheader 2xl:w-[70%] mt-6 [&>a]:px-10 [&>a]:py-3 [&>a]:ml-2  rounded-sm flex flex-row justify-around items-center">
          <Link className=" hover:bg-slate-500" href="/instagram/video ">
            Video
          </Link>
          <Link className=" hover:bg-slate-500" href="/instagram/reel">
            Reels
          </Link>
          <Link className=" hover:bg-slate-500" href="/instagram/igtv">
            Igtv
          </Link>
          <Link className=" hover:bg-slate-500" href="/instagram/photo">
            Photo
          </Link>
          <Link className=" hover:bg-slate-500" href="/instagram/post">
            Posts
          </Link>
          <Link className=" hover:bg-slate-500" href="/instagram/story">
            Highlights
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
