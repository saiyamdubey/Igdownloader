
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let { url } = req.query;

  if (typeof url === 'string') {
    url = url.replace(/\?utm_source=ig_web_copy_link$/, '');
    url = url.replace(/\/[^/]*$/, '');
    url = url + process.env.SECRET_KEY;
    
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

