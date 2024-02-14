

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let { url } = req.query;

  try {
    const response = await axios.get(url as string );
console.log("response 1",response.data)
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal 2 Server Error' });
  }
}
