"use client";

import React, { useState } from "react";
import { GoPaste } from "react-icons/go";
import { toast } from "sonner";
import Loader from "../../../components/loader";

type Props = {};

function Searchbar({}: Props) {
  const [inputValue, setInputValue] = useState("");
  const [videodata, setVideodata] = useState<any>("");
  const [imagedata, setimagedata] = useState<any>("");
  const [courosaldata, setcourosaldata] = useState<any>("");
  const [loading, setloading] = useState<boolean>(false);

  const handleDownload = () => {
    setloading(true);
    downloadReel(inputValue);
  };

  async function downloadReel(url: string) {
    try {
      if (url.startsWith("https://instagram.com/")) {
        setloading(false);
        return toast("Check the Provided Link");
      }

      const response = await fetch(
        `/api/download?url=${encodeURIComponent(url)}`
      );
      const data = await response.json();
      console.log("mm ::", data);

      // const response1 = await fetch(
      //   `/api/test?url=https://jsonplaceholder.typicode.com/posts/`
      // );
      // const posts = await response1.json();
      // console.log("hi ::", posts);

      if (data === "link is wrong") {
        setloading(false);
        toast("Check the Provided Link");
      }
      if (data.graphql.shortcode_media.__typename === "GraphVideo") {
        setimagedata("");
        setVideodata(data);
        setcourosaldata("");
        setloading(false);
      } else if (data.graphql.shortcode_media.__typename === "GraphImage") {
        setimagedata(data);
        setVideodata("");
        setcourosaldata("");
        setloading(false);
      } else if (data.graphql.shortcode_media.__typename === "GraphSidecar") {
        setVideodata("");
        setimagedata("");
        setcourosaldata(
          data.graphql.shortcode_media.edge_sidecar_to_children.edges
        );
        console.log(
          "courosaldta",
          data.graphql.shortcode_media.edge_sidecar_to_children.edges
        );
        setloading(false);
      }
    } catch (error) {
      setloading(false);
      toast("Check the Provided Link 👀");
    }
  }

  const pasteOrClear = () => {
    if (inputValue === "") {
      navigator.clipboard.readText().then((text) => setInputValue(text));
    } else {
      setInputValue("");
    }
  };

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
            className="input 2xl:pl-32 sm:pl-20 min-h-10 w-[48rem] text-base sm:text-[14px] sm:w-[24rem] py-3 placeholder:text-base sm:placeholder:text-[14px] placeholder:font-thin border-2 border-black"
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
            value="Download"
            type="button"
          />
        </div>
      </div>

      <div className="loading w-[100%] h-fit  flex justify-center items-center ">
        {loading === true ? (
          <>
            <div className=" flex justify-center items-center h-24 mt-10">
              <Loader />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="downloadmediadata  h-fit w-[100%] flex justify-center flex-row items-center bg-gray-900 light:bg-red-600 mt-8">
        {/* {loading === true ? (
          <>
            <div>
              <Loader />
            </div>
          </>
        ) : (
          ""
        )} */}

        {videodata === "" ? (
          <>{/* <Loader /> */}</>
        ) : (
          <>
            <div className="w-[24rem] mt-8 p-7 ">
              <div className="flex relative ">
                <img
                  className=" w-[100%] h-[18rem] brightness-110 saturate-100 blur-sm"
                  src="video.png"
                  alt="images"
                ></img>
                <a href={videodata.graphql.shortcode_media.video_url + "&dl=1"}>
                  <button className="p-3 rounded-lg absolute top-[40%] left-[40%] bg-green-600">
                    Preview
                  </button>
                </a>
              </div>

              <a href={videodata.graphql.shortcode_media.video_url + "&dl=1"}>
                <button className="p-3 rounded-lg  mt-3 ml-[6rem] bg-purple-600">
                  Download Video
                </button>
              </a>
            </div>
          </>
        )}

        {imagedata === "" ? (
          <>{/* <Loader /> */}</>
        ) : (
          <>
            <div className="w-[20rem] mt-8">
              <div className="flex relative ">
                <img
                  className=" w-[100%] h-[18rem] brightness-110 saturate-100 blur-sm"
                  src="easyblur.jpg"
                  alt="images"
                ></img>
                <a
                  href={
                    imagedata.graphql.shortcode_media.display_resources[0].src +
                    "&dl=1"
                  }
                >
                  <button className="p-3 rounded-lg absolute top-[40%] left-[36%] bg-green-600">
                    Preview
                  </button>
                </a>
              </div>

              <a
                href={
                  imagedata.graphql.shortcode_media.display_resources[0].src +
                  "&dl=1"
                }
              >
                <button className="p-3 rounded-lg mt-3 ml-[5.6rem] bg-purple-600">
                  Download Image
                </button>
              </a>
            </div>
          </>
        )}

        {courosaldata === "" ? (
          <>{/* <Loader /> */}</>
        ) : (
          <div className="flex flex-wrap gap-8 items-center justify-center p-5">
            {courosaldata.map((item: any, index: number) => (
              <div key={index} className="w-[20rem] mt-8">
                {" "}
                {/* Added 'key' prop */}
                <div className="flex relative ">
                  <img
                    className="w-[100%] h-[18rem] brightness-110 saturate-100 blur-sm"
                    src="easyblur.jpg"
                    alt="images"
                  />
                  <a href={item.node.display_url + "&dl=1"}>
                    <button className="p-3 rounded-lg absolute top-[40%] left-[36%] bg-green-600">
                      Preview
                    </button>
                  </a>
                </div>
                <a href={item.node.display_url + "&dl=1"}>
                  <button className="p-3 rounded-lg mt-3 ml-[5.5rem] bg-purple-600">
                    Download Image
                  </button>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
