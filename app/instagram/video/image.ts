import fs from "fs";
import https from "https";

export async function downloadImage(url: string): Promise<void> {
  const filename = "image.jpeg";
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const fileStream = fs.createWriteStream(filename);
      response.pipe(fileStream);
      fileStream.on("finish", () => {
        fileStream.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
    }).on("error", (error) => {
      console.error(`Error downloading image from ${url}: ${error}`);
      reject(error);
    });
  });
}