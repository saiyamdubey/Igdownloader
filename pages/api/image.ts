// import fs from "fs";
// import https from "https";

// function downloadImage(url, filename) {
//   https
//     .get(url, (response) => {
//       const fileStream = fs.createWriteStream(filename);
      
//       response.pipe(fileStream);
//       fileStream.on("finish", () => {
//         fileStream.close();
//         console.log(`Downloaded ${filename}`);
//       });
//     })
//     .on("error", (error) => {
//       console.error(`Error downloading image from ${url}: ${error}`);
//     });
// }

// const imageUrl =
//   "https://instagram.fknu1-2.fna.fbcdn.net/v/t39.30808-6/420526848_18530730919056421_1547586720648294585_n.jpg?stp=dst-jpg_e15_s480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDExNjMuc2RyIn0&_nc_ht=instagram.fknu1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=qlGy4nxcB-YAX92STf7&edm=AABBvjUAAAAA&ccb=7-5&ig_cache_key=MzI5NjgzODU5NzkxNzQ3NjY2OA%3D%3D.2-ccb7-5&oh=00_AfDkeNl78pcWwaNwV2KndseQnjO5qzb2AtcSBUhMwrVRRg&oe=65C950CB&_nc_sid=4f4799";
// const filename = "image.jpeg";
// downloadImage(imageUrl, filename);



// import fs from  'fs';

// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   let { url } = req.query;
//   console.log("url ::",url)
//   try {
//     const response = await fetch(url as string);
//     console.log("Respone of the image fetch ::",response)

//     const blobData = await response.blob();
//     console.log("blobData::",await blobData.text());

//     const blobUrl = URL.createObjectURL(blobData);
//     console.log('Blob Url :', blobUrl);
//     const link = document.createElement('a');
//     link.href = blobUrl;
//     link.download = 'image.jpeg'; 

//     link.dispatchEvent(new MouseEvent('click'));

//     // URL.revokeObjectURL(blobUrl);



//     res.status(200).send("Download initiated");
//   } catch (error) {
//     console.error('Error fetching from image.ts data:', error);
//     res.status(500).json({ error: 'Internal from the image.ts server error' });
//   }
// }

// "use client"

// import fs from 'fs';
// import fetch from 'node-fetch';
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   let { url } = req.query;
//   console.log("url ::", url);
  
//   try {
//     const response = await fetch(url as string);
//     console.log("Response of the image fetch ::", response);
  
//     const blobData = await response.blob();
    
//     const imageData = await blobData.text();
//     console.log("Image Data in text form ::", imageData);
  
//     // Convert text data back to binary data
//     // const imageBuffer = Buffer.from(imageData, 'base64');
  
//     // Write binary data to a file
//     fs.writeFileSync('downloaded1Image.jpeg', imageData,);
  
//     res.status(200).send("Download completed");
//   } catch (error) {
//     console.error('Error fetching from image.ts data:', error);
//     res.status(500).json({ error: 'Internal from the image.ts server error' });
//   }
// }

// "use client"

// import fs from 'fs';
// import https from "https";
// import fetch from 'node-fetch';
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   let { url } = req.query;
//   console.log("url ::", url);
  
//   try {
//     const response = await fetch(url as string);
//     console.log("Response of the image fetch ::", response);
  
//     https
//     .get(url as string, (resonse) => {
//       const fileStream = fs.createWriteStream("down.jpeg");
      
//       resonse.pipe(fileStream);
//       fileStream.on("finish", () => {
//         fileStream.close();
//         console.log(`Downloaded down.jpeg`);
//       });
//     })
//     .on("error", (error) => {
//       console.error(`Error downloading image from ${url}: ${error}`);
//     });

//   } catch (error) {
//     console.error('Error fetching from image.ts data:', error);
//     res.status(500).json({ error: 'Internal from the image.ts server error' });
//   }
// }

// thhik hai ye bhi

// import fs from 'fs';
// import https from "https";
// import fetch from 'node-fetch';
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   let { url } = req.query;
//   console.log("url ::", url);
  
//   try {
//     const response = await fetch(url as string);
//     console.log("Response of the image fetch ::", response);
  
//     // https
//     // .get(url as string, (resonse) => {
//     //   const fileStream = fs.createWriteStream("down.jpeg");
      
//     //   resonse.pipe(fileStream);
//     //   fileStream.on("finish", () => {
//     //     fileStream.close();
//     //     console.log(`Downloaded down.jpeg`);
//     //   });
//     // })
//     // .on("error", (error) => {
//     //   console.error(`Error downloading image from ${url}: ${error}`);
//     // });
//     res.send(response.url)

//   } catch (error) {
//     console.error('Error fetching from image.ts data:', error);
//     res.status(500).json({ error: 'Internal from the image.ts server error' });
//   }
// }

import fs from 'fs';
import http from 'http';
import fetch from 'node-fetch';
import { NextApiRequest, NextApiResponse } from 'next';

const maxLength = 10; // 10mb

const download = function(uri, callback) {
  http.request(uri)
    .on('response', function(res) {
      if (res.headers['content-length'] > maxLength * 1024 * 1024) {
        callback(new Error('Image too large.'));
      } else if (![200, 304].includes(res.statusCode)) {
        callback(new Error('Received an invalid status code.'));
      } else if (!res.headers['content-type'].includes('image')) {
        callback(new Error('Not an image.'));
      } else {
        let body = '';
        res.setEncoding('binary');
        res
          .on('error', function(err) {
            callback(err);
          })
          .on('data', function(chunk) {
            body += chunk;
          })
          .on('end', function() {
            const path = '/tmp/' + Math.random().toString().split('.').pop();
            fs.writeFile(path, body, 'binary', function(err) {
              callback(err, path);
            });
          });
      }
    })
    .on('error', function(err) {
      callback(err);
    })
    .end();
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;
  console.log("url ::", url);

  try {
    const response = await fetch(url as string);
    console.log("Response of the image fetch ::", response);

    download(url, (err, path) => {
      if (err) {
        console.error('Error downloading image:', err);
        res.status(500).json({ error: 'Error downloading image' });
      } else {
        console.log('Image downloaded successfully:', path);
        res.status(200).send("Download completed");
      }
    });

  } catch (error) {
    console.error('Error fetching from image.ts data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

