import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Description from "./instagram/description";
import Hero from "@/components/hero";
import Searchbar from "./instagram/video/page";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title:
    "Instant Downloader videos  || Instagram Downloader Video  | Images , Reel , DP , Stories , Highlights",
  description:
    "Instagram Downloader | Unlock the full potential of your Instagram experience with our versatile Instagram Downloader! Whether you're looking to save captivating videos, stunning images, engaging Reels, profile pictures (DP), captivating Stories, or eye-catching Highlights, our user-friendly tool has got you covered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-serif overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Hero />
          {children}
          <Toaster />
          <Searchbar />
          <Description />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
