
// import { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';
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
//     console.log("hello1")
//     const response = await fetch(url as string);
//     // console.log(response.json())
//     // const data = response.json();
//     res.status(200).send(response.json());
//   } catch (error) {
//     res.status(500).send('error');
//   }
// }


import { NextApiRequest, NextApiResponse } from 'next';

export const dynamic = 'force-dynamic';


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
    const response = await fetch(url as string);

    const data =await  response.json();
    console.log("dtayvs:: ",data)
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal1234567 Server Error' });
  }
}
