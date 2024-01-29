import Navbar from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instant Tiktok videos ",
  description:
    "Tiktok Downloader | Unlock the full potential of your Tiktok experience with our versatile tiktok Downloader! Whether you're looking to save captivating videos, stunning images, engaging Reels, profile pictures (DP), captivating Stories, or eye-catching Highlights, our user-friendly tool has got you covered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex  overflow-hidden flex-col">
      {children}
    </main>
  );
}
