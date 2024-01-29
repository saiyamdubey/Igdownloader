import FooterDemo from "@/components/footer";
import Navbar from "@/components/navbar";
import Typing from "@/components/typing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Youtube Downloader videos  ",
  description:
    "Youtube Downloader | Unlock the full potential of your youtube experience with our versatile youtube Downloader! Whether you're looking to save captivating videos, stunning images, engaging Reels, profile pictures (DP), captivating Stories, or eye-catching Highlights, our user-friendly tool has got you covered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex overflow-hidden flex-col">
      {children}
    </main>
  );
}
