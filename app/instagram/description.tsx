import React from "react";

type Props = {};

function Description({}: Props) {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl text-center mb-6">
            Instagram Video Download
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-justify mb-6">
              Instagram is one of the most popular social media platforms
              between teens and young adults and Instagram has a different
              identity in comparison with other social media platforms.
            </p>

            <p className="text-lg text-justify mb-6">
              The tool is 100% free for a lifetime, we did not charge anything
              with you for download video Instagram. We just provided you best
              services and an easy way of downloading your Instagram Video.
            </p>

            <h2 className="text-xl mb-4">
              Key Feature of Instagram video downloader:
            </h2>
            <ul className="list-disc ml-6 text-lg mb-6">
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

            <h2 className="text-xl mb-4">How to Download Instagram Video?</h2>
            <p className="text-lg text-justify mb-6">
              Instagram downloader tool is providing very simple Instagram video
              downloading in only just 2 steps but before following these
              instructions:
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Description;
