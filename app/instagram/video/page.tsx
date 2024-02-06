"use client";

import React, { useState } from "react";
import { saveAs } from "file-saver";
import { GoPaste } from "react-icons/go";
import { toast } from "sonner";

type Props = {};

function Searchbar({}: Props) {
  const [inputValue, setInputValue] = useState("");
  const [videodata, setvideodata] = useState<any>({});

  async function downloadReel(url: string) {
    try {
      const response = await fetch(
        `/api/download?url=${encodeURIComponent(url)}`
      );
      const data = await response.json();
      if (data.error) {
        toast("Check the Provided Link");
      }

      setvideodata(data);

      console.log(
        "data > graphql > shortcode_media > display_resources : ",
        data.graphql.shortcode_media.display_resources[0].src
      );
    } catch (error) {
      console.error(error);
    }
  }

  const handleDownload = () => {
    downloadReel(inputValue);
  };

  const pasteOrClear = () => {
    if (inputValue === "") {
      navigator.clipboard.readText().then((text) => setInputValue(text));
    } else {
      setInputValue("");
    }
  };

  const downloadOnClick = async () => {
    if (videodata.graphql) {
      let imageUrl = videodata.graphql.shortcode_media.display_resources[0].src;
      console.log(imageUrl);
      await fetch(`/api/imagedown?url=${encodeURIComponent(imageUrl)}`)
        .then((response) => {
          // Check if response is ok
          if (response.ok) {
            // Create a Blob from the fetched data
            return response.blob();
          } else {
            throw new Error("Failed to fetch image");
          }
        })
        .then((blob) => {
          console.log("blob :", blob);
          // Create a Blob URL
          const blobUrl = URL.createObjectURL(blob);

          // Create an anchor element
          const anchor = document.createElement("a");
          anchor.href = blobUrl;
          anchor.download = "downloaded_image.jpg";

          // Trigger a click event on the anchor element
          anchor.click();

          // Revoke the Blob URL to free up resources
          URL.revokeObjectURL(blobUrl);
        })
        .catch((error) => console.error("Error fetching image:", error));
    }
  };

  return (
    <>
      <div className="flex flex-col overflow-hidden justify-center items-center m-auto">
        <div className="mt-10  input-group flex items-center">
          {/* Your input and button elements */}
          <button
            className="absolute sm:mb-[70px] ml-1 flex button--submit border-2 min-h-10 mr-2 rounded-r-[3px] px-4 py-2 bg-gray-500 text-white text-base  cursor-pointer transition-colors duration-500  border-black ease-in-out  focus:border-gray-700 "
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
              id="Email"
              name="Email"
              type="email"
              value={inputValue}
              placeholder="instagram.com/p/Cx8FpSlyXAC/"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <input
              onClick={handleDownload}
              className="button--submit border-2 sm:mt-5 sm:w-[10rem] min-h-10 rounded-r-[3px] sm:rounded-[18px] px-4 py-3 bg-black text-white text-base cursor-pointer    border-black ease-in-out   bg-gradient-to-r from-blue-700 via-purple-500 via-pink-500 to-red-500 hover:from-yellow-600 hover:via-yellow-500 hover:to-green-600"
              value="Download"
              type="submit"
            />
          </div>
        </div>
        <div className="downloadmediadata">
          <h1>Here is the Fucking links to download</h1>
          {videodata.graphql && (
            // Use a button instead of Link to trigger download
            <button
              className="px-8 py-4 bg-orange-500"
              onClick={downloadOnClick}
            >
              Preview Download
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Searchbar;

// const blobUrl = URL.createObjectURL(blob);

// // Create an anchor element
// const anchor = document.createElement("a");
// anchor.href = blobUrl;
// anchor.download = "downloaded_image.jpg";

// // Trigger a click event on the anchor element
// anchor.click();

// // Revoke the Blob URL to free up resources
// URL.revokeObjectURL(blobUrl);
