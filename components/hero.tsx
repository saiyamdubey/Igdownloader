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
        <div className="linksheader 2xl:w-dvw mt-6 p-2 [&>a]:p-10 bg-red-500 flex flex-row justify-center items-center">

          <Link href="/instagram/video">Video</Link>
          <Link href="/instagram/reel">Reels</Link>
          <Link href="/instagram/igtv">Igtv</Link>
          <Link href="/instagram/photo">Photo</Link>
          <Link href="/instagram/post">Posts</Link>
          <Link href="/instagram/story">Stories</Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
