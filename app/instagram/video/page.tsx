"use client";

import React, { useEffect, useState } from "react";
import { GoPaste } from "react-icons/go";
import { toast } from "sonner";
import Loader from "@/app/instagram/loader";

type Props = {};

function Searchbar({}: Props) {
  const [inputValue, setInputValue] = useState("");
  const [videodata, setVideodata] = useState<any>("");
  const [imagedata, setimagedata] = useState<any>("");
  // const [proxyImageUrl, setProxyImageUrl] = useState<string | null>(null);

  // useEffect(() => {
  //   if (videodata.data?.graphql?.shortcode_media?.display_resources?.[0]?.src) {
  //     // handleFetchProxyImage(
  //     //   videodata.data.graphql.shortcode_media.display_resources[0].src
  //     // );
  //   }
  // }, [videodata]);

  // const handleFetchProxyImage = async (imageUrl: string) => {
  //   try {
  //     const response = await fetch(
  //       `/api/imagedown?imageUrl=${encodeURIComponent(imageUrl)}`
  //     );
  //     const data = await response.json();
  //     if (data.imageUrlBase64) {
  //       setProxyImageUrl(data.imageUrlBase64);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching proxy image:", error);
  //   }
  // };

  const handleDownload = () => {
    downloadReel(inputValue);
  };

  // async function downloadReel(url: string) {
  //   try {
  //     if (url.startsWith("https://instagram.com/")) {
  //       return toast("Check the Provided Link");
  //     }
  //     const response = await fetch(
  //       `/api/download?url=${encodeURIComponent(url)}`
  //     );

  //     const data = await response.json();
  //     console.log(data);
  //     setVideodata(data);
  //     if (data.error === "link is wrong") {
  //       console.log("hello");
  //       toast("Check the Provided Link");
  //     } else if (data.graphql.shortcode_media.__typename == "GraphVideo") {
  //       setimagedata("");
  //       setVideodata(data);
  //     } else {
  //       setVideodata("");
  //       setimagedata(data);
  //     }
  //   } catch (error) {
  //     toast("Check the Provided Link");
  //   }
  // }
  async function downloadReel(url: string) {
    try {
      if (url.startsWith("https://instagram.com/")) {
        return toast("Check the Provided Link");
      }

      const response = await fetch(
        `/api/download?url=${encodeURIComponent(url)}`
      );
      const data = await response.json();
      console.log(data);

      if (data === "link is wrong") {
        console.log("hello");
        toast("Check the Provided Link");
      }
      if (data.graphql.shortcode_media.__typename == "GraphVideo") {
        setimagedata("");
        setVideodata(data);
      } else {
        setVideodata("");
        setimagedata(data);
      }
    } catch (error) {
      toast("Check the Provided Link sir");
    }
  }

  const pasteOrClear = () => {
    if (inputValue === "") {
      navigator.clipboard.readText().then((text) => setInputValue(text));
    } else {
      setInputValue("");
    }
  };

  // async function downloadImage(url1: string) {
  //   console.log("this fun");
  //   try {
  //     const response = await fetch(
  //       `/api/image?url=${encodeURIComponent(url1)}`
  //     );

  //     console.log("response from after the image.ts api", response);
  //     const data = await response.blob();
  //     const url = URL.createObjectURL(data);
  //     const link = document.createElement("a");
  //     console.log(url);
  //     link.href = url;

  //     link.download = "image.jpeg";
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //     URL.revokeObjectURL(url);
  //   } catch (error) {
  //     console.error("Error downloading reel:", error);
  //   }
  // }

  return (
    <div className="flex flex-col overflow-hidden justify-center items-center m-auto">
      <div className="mt-10 input-group flex items-center">
        <button
          className="absolute sm:mb-[70px] ml-1 flex button--submit border-2 min-h-10 mr-2 rounded-r-[3px] px-4 py-2 bg-gray-500 text-white text-base cursor-pointer transition-colors duration-500 border-black ease-in-out focus:border-gray-700"
          onClick={pasteOrClear}
        >
          <GoPaste className="mt-1 mr-3 sm:mr-0" />

          <h1 className="sm:hidden">
            {inputValue === "" ? " Paste" : "Clear"}
          </h1>
        </button>
        <div className="flex sm:flex-col sm:justify-center sm:items-center">
          <input
            className="input 2xl:pl-32 sm:pl-20 min-h-10 w-[48rem] sm:w-[24rem] py-3 placeholder:text-base sm:placeholder:text-sm placeholder:font-mono border-2 border-black"
            id="text"
            name="text"
            type="text"
            value={inputValue}
            placeholder="instagram.com/p/Cx8FpSlyXAC/"
            onChange={(e) => setInputValue(e.target.value)}
          />

          <input
            onClick={handleDownload}
            className="button--submit border-2 sm:mt-5 sm:w-[10rem] min-h-10 rounded-r-[3px] sm:rounded-[18px] px-4 py-3 bg-black text-white text-base cursor-pointer border-black ease-in-out bg-gradient-to-r from-red-700  to-pink-500 hover:from-pink-600 hover:to-red-600"
            value="Search"
            type="button"
          />
        </div>
      </div>
      <div className="downloadmediadata h-fit w-[80%] flex justify-center flex-row items-center bg-gray-700 mt-8">
        {videodata === "" ? (
          <>{/* <Loader /> */}</>
        ) : (
          <a href={videodata.graphql.shortcode_media.video_url + "&dl=1"}>
            <button>Download Video</button>
          </a>
        )}
        {imagedata === "" ? (
          <>{/* <Loader /> */}</>
        ) : (
          <>
            <div className="w-[20rem]">
              <img className=" w-[100%] h-[18rem]" src="easyblur.jpg"></img>
              <button className="p-3 bg-purple-600">Preview</button>
              <a
                href={
                  imagedata.graphql.shortcode_media.display_resources[0].src +
                  "&dl=1"
                }
              >
                <button>Download Image</button>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
