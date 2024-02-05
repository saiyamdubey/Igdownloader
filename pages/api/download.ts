// pages/api/download.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let { url } = req.query;

  // Remove ?utm_source=ig_web_copy_link from the URL if it exists
  if (typeof url === 'string') {
    url = url.replace(/\?utm_source=ig_web_copy_link$/, '');
    url = url.replace(/\/[^/]*$/, '');
    url = url + process.env.SECRET_KEY;
    console.log(url)
  }

  try {
    const response = await fetch(url as string);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
