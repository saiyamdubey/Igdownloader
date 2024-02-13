
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   let { url } = req.query;

//   if (typeof url === 'string') {
//     url = url.replace(/\?utm_source=ig_web_copy_link$/, '');
//     url = url.replace(/\?hl=en$/, '');
//     url = url.replace(/\?igsh=MWNqM3Jkemx0ZGNpaA==$/, '');
//     url = url.replace(/\/[^/]*$/, '');
//     url = url + process.env.SECRET_KEY;
//     console.log(url)
//   }

//   try {

//     const response = await fetch(url as string);

//     const data = await response.json();
//     res.status(200).send(data);
//   } catch (error) {
//     res.status(500).send('error');
//   }
// }


import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let { url } = req.query;

  if (typeof url === 'string') {
    url = url.replace(/\?utm_source=ig_web_copy_link$/, '');
    url = url.replace(/\?hl=en$/, '');
    url = url.replace(/\?igsh=MWNqM3Jkemx0ZGNpaA==$/, '');
    url = url.replace(/\/[^/]*$/, '');
    url = url + "/?__a=1&__d=dis";
    console.log(url)
  }

  try {
    const response = await axios.get(url as string);
console.log(response.data)
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
