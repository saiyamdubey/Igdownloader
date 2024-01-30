import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
type Props = {};

function Description({}: Props) {
  return (
    <>
      <div className=" max-w-full overflow-hidden">
        <div className="py-10 px-4">
          <h1 className="2xl:text-5xl sm:text-3xl sm:font-extrabold  text-primary font-bold text-center text-ellipsis mt-4 mb-6">
            Instagram Downloder App
          </h1>
          <div className="px-2 mx-auto">
            <p className=" text-[15px] text-justify mb-6">
              <span className="sm:mr-14"></span>Instagram is one of the most
              popular social media platforms between teens and young adults and
              Instagram has a different identity in comparison with other social
              media platforms.
            </p>
            <p className="text-[15px] text-justify text-pretty mb-6">
              <span className="sm:mr-2"></span>The tool is 100% free for a
              lifetime, we did not charge anything with you for download video
              Instagram. We just provided you best services and an easy way of
              downloading your Instagram Video.
            </p>

            <h2 className="text-xl text-primary mb-4">
              Key Feature of Instagram video downloader:
            </h2>
            <ul className="list-decimal sm:[&>li]:mt-4 sm:ml-5 text-[14px] mb-8">
              <li>
                Free, Fast & Secure tool for any Instagram Video Downloading.
              </li>
              <li>No need to download an additional app.</li>
              <li>No need to create an account for downloading videos.</li>
              <li>No need to share your login or signup details.</li>
              <li>
                Download Instagram video on any device like (Mobile Phone,
                iPhone, Tablet, Pc.)
              </li>
              <li>Download IG video in original quality.</li>
              <li>
                You can also download IGTV videos, Photos, and Feed videos.
              </li>
            </ul>

            <h2 className="text-xl text-primary mb-4">
              How to Download Instagram Video?
            </h2>
            <p className="text-base text-justify text-wrap mb-6">
              <span className="sm:mr-16"></span>Instagram downloader tool is
              providing very simple Instagram video downloading in only just 2
              steps but before following these instructions:
            </p>
            <ul className="list-disc sm:[&>li]:mt-4 sm:ml-2 text-[14px] mb-8">
              <li>Copy the link to that video which you want to download.</li>
              <li>Open indown.io (in your web browser).</li>
              <li>
                Paste the video link in the Instagram video downloader input
                box.
              </li>
              <li>Now your video will be synchronized automatically.</li>
              <li>
                Click on the Download button to being process your video
                downloading.
              </li>
              <li>
                That`s all! Your video will be downloaded. How simple it is!
              </li>
              <li>
                You can also download IGTV videos, Photos, and Feed videos.
              </li>
            </ul>

            <h2 className="text-xl text-primary mb-4">
              Copy Link for Download Video Instagram?
            </h2>
            <p className="text-base text-justify text-wrap mb-6">
              <span className="sm:mr-16"></span>Copying the link of your video
              which you want to download is a very simple process just follow
              these steps:
            </p>
            <ul className=" list-decimal sm:[&>li]:mt-4 sm:ml-6 text-[14px] mb-8">
              <li>Open the Instagram application</li>
              <li>Choose the video which you want to download</li>
              <li>Click on the 3 dots.</li>
              <li>Popup open, Now click on Copy Link</li>
              <li>Hurray! Your Instagram video downloading link is copied.</li>
              <li>Happy Downloding journey Boss 🦁 ...</li>
            </ul>
            <h2 className="text-xl text-primary mb-4">
              Frequently Asked Question
            </h2>
            <Accordion.Root orientation="horizontal">
              <Accordion.Item value="item-1">…</Accordion.Item>
              <Accordion.Item value="item-2">…</Accordion.Item>
            </Accordion.Root>
            <Accordion type="multiple" collapsible orientation="horizontal">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
export default Description;
