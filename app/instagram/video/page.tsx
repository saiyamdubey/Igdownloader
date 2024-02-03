import React from "react";
import Link from "next/link";

type Props = {};

function Page({}: Props) {
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

export default Page;
