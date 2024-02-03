import Link from "next/link";
import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <>
      <div className="h-[90vh] flex justify-center items-center m-auto w-[90%]">
        <div className="headlines">
          <h1 className="">
            Instagram <span className="">Downloader</span>
          </h1>
          <p className="">
            Download Instagram Video, Photos, Reels, and Profile Pictures with
            IG Downloader
          </p>
        </div>
        <div className="linksheader">
          <Link href="/instagram/iglinks">Video</Link>
          <Link href="/instagram/iglinks">Reels</Link>
          <Link href="/instagram/iglinks">Profile</Link>
          <Link href="/instagram/iglinks">Photo</Link>
          <Link href="/instagram/iglinks">Posts</Link>
          <Link href="/instagram/iglinks">Stories</Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
