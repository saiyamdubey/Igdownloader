import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "!Instagram Downloader Video  | Images , Reel , DP , Stories , Highlights",
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
