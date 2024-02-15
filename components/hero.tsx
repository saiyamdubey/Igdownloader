import React from "react";
import Link from "next/link";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { PiFilmReel } from "react-icons/pi";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { MdMusicVideo } from "react-icons/md";
import { TbPhotoHeart } from "react-icons/tb";

type Props = {};

function Hero({}: Props) {
  return (
    <>
      <div className=" overflow-hidden  flex flex-col justify-start items-center m-auto w-[95%]">
        <div className="headlines  t">
          <h1 className="text-center text-5xl mt-12 relative mb-4 sm:text-3xl">
            Instagram{"  "}
            <span className="relative ml-2">
              <span className="sm:hidden">{/* <Typing /> */}</span>
              Downloader
              <span className="absolute bottom-0 left-0 w-full h-[3px] mt-[5px] bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-red-500 hover:from-yellow-400 hover:via-yellow-500 hover:to-green-500"></span>
            </span>
          </h1>
          <p className="text-2xl text-center font-mono sm:text-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-red-500 hover:from-yellow-400 hover:via-yellow-500 hover:to-green-500">
              Download Instagram Video, Photos, Reels, and Profile Pictures with
              IG Downloader
            </span>
          </p>
        </div>
        <div className="linksheader text-white text-[18px] bg-gray-800 2xl:w-[80%] sm:w-[100%] mt-6 [&>a]:px-[35px] sm:[&>a]:px-[15px] [&>a]:py-3 [&>a]:ml-0 sm:[&>a]:ml-0  rounded-xl flex flex-row justify-evenly items-center">
          <Link
            className="flex flex-row hover:bg-gradient-to-r hover:from-red-300 hover:to-pink-500 rounded-xl"
            href="/instagram/story"
          >
            <TbPhotoHeart className="mt-1 mr-5 sm:mr-0" />
            <span className="sm:hidden">Highlights</span>
          </Link>

          <Link
            className="flex flex-row hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 rounded-xl"
            href="/instagram/reel"
          >
            <PiFilmReel className="mt-1 mr-4 sm:mr-0" />
            <span className="sm:hidden">Reels</span>
          </Link>
          <Link
            className="flex flex-row hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 rounded-xl"
            href="/instagram/story"
          >
            <MdMusicVideo className="mt-1 mr-4 sm:mr-0" />
            <span className="sm:hidden">Corausol</span>
          </Link>
          <Link
            className="flex flex-row hover:bg-gradient-to-r hover:from-red-400 hover:to-red-500 rounded-xl"
            href="/instagram/video "
          >
            <AiOutlineVideoCameraAdd className="mt-1 mr-4 sm:mr-0" />
            <span className="sm:hidden">Video</span>
          </Link>
          <Link
            className="flex flex-row hover:bg-gradient-to-r hover:from-green-400 hover:to-green-500 rounded-xl"
            href="/instagram/igtv"
          >
            <MdOutlineSlowMotionVideo className="mt-1 mr-4 sm:mr-0" />
            <span className="sm:hidden">Igtv</span>
          </Link>
          <Link
            className="flex flex-row hover:bg-gradient-to-r hover:from-indigo-400 hover:to-indigo-500 rounded-xl"
            href="/instagram/post"
          >
            <MdOutlinePhotoCamera className="mt-1 mr-4 sm:mr-0" />
            <span className="sm:hidden">Posts</span>
          </Link>
          <Link
            className="flex flex-row hover:bg-gradient-to-r hover:from-pink-700 hover:to-yellow-500 rounded-xl"
            href="/instagram/post"
          >
            <LiaPhotoVideoSolid className="mt-1 mr-4 sm:mr-0" />
            <span className="sm:hidden">Photo</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
