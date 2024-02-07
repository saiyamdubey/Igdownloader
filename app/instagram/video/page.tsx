"use client";

import React, { useEffect, useState } from "react";
import { GoPaste } from "react-icons/go";
import { toast } from "sonner";
import { downloadImage } from "@/app/instagram/video/image";

type Props = {};

function Searchbar({}: Props) {
  const [inputValue, setInputValue] = useState("");
  const [videodata, setVideodata] = useState<any>({});
  const [proxyImageUrl, setProxyImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (videodata.data?.graphql?.shortcode_media?.display_resources?.[0]?.src) {
      handleFetchProxyImage(
        videodata.data.graphql.shortcode_media.display_resources[0].src
      );
    }
  }, [videodata]);

  const handleFetchProxyImage = async (imageUrl: string) => {
    try {
      const response = await fetch(
        `/api/imagedown?imageUrl=${encodeURIComponent(imageUrl)}`
      );
      const data = await response.json();
      if (data.imageUrlBase64) {
        setProxyImageUrl(data.imageUrlBase64);
      }
    } catch (error) {
      console.error("Error fetching proxy image:", error);
    }
  };

  const handleDownload = () => {
    downloadReel(inputValue);
  };

  async function downloadReel(url: string) {
    try {
      const response = await fetch(
        `/api/download?url=${encodeURIComponent(url)}`
      );

      const data = await response.json();
      console.log(data);
      await setVideodata(data);
      console.log("saitdndg");
      console.log(data.graphql.shortcode_media.display_resources[0].src);
      setProxyImageUrl(data.graphql.shortcode_media.display_resources[0].src);
      if (data.error) {
        toast("Check the Provided Link");
      }
      await setVideodata(data);
    } catch (error) {
      console.error("Error downloading reel:", error);
    }
  }

  const pasteOrClear = () => {
    if (inputValue === "") {
      navigator.clipboard.readText().then((text) => setInputValue(text));
    } else {
      setInputValue("");
    }
  };

  async function downloadImage(url1: string) {
    try {
      const response = await fetch(
        `/api/image?url=${encodeURIComponent(url1)}`
      );
      const data = await response.blob();
      const url = URL.createObjectURL(data);
      const link = document.createElement("a");
      link.href = url;
      link.download = "image.jpeg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading reel:", error);
    }
  }

  async function handleDownloadImage(url: string) {
    
    try {
      await downloadImage(url);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  }

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
            className="button--submit border-2 sm:mt-5 sm:w-[10rem] min-h-10 rounded-r-[3px] sm:rounded-[18px] px-4 py-3 bg-black text-white text-base cursor-pointer border-black ease-in-out bg-gradient-to-r from-blue-700 via-purple-500 via-pink-500 to-red-500 hover:from-yellow-600 hover:via-yellow-500 hover:to-green-600"
            value="Download"
            type="submit"
          />
        </div>
      </div>
      <div className="downloadmediadata">
        <h1>Saiyam Dubey</h1>

        {proxyImageUrl && (
          <button onClick={() => handleDownloadImage(proxyImageUrl)}>
            Download image1
          </button>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
