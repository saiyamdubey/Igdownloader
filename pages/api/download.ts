// pages/api/download.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { fetchImage } from './imagedown';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let { url } = req.query;

  if (typeof url === 'string') {
    // Check if the URL is from Instagram and remove query parameters
    if (url.includes('instagram.com')) {
      url = url.split('?')[0];
    }
  }

  try {
    // Use the fetchImage function to fetch the image data
    const fileData = await fetchImage(url as string);

    // Set the response headers
    const fileName = 'downloaded_image.jpg';
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    res.setHeader('Content-Type', 'image/jpeg'); 

    // Convert the Blob data to Buffer and send it in the response
    const buffer = await fileData.arrayBuffer();
    const data = Buffer.from(buffer);
    
    res.status(200).send(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}