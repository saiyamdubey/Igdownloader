

import { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let { url } = req.query;

  try {
    const response = await fetch(url as string,{
        cache:"no-store"
    } );
console.log("response 1 :: ",response)
    const data = response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal 2 Server Error' });
  }
}
