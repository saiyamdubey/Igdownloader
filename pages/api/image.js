import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
  const { url } = req.query;
  const response = await fetch(url);
  const data = await response.buffer();
  res.setHeader('Content-Type', 'image/jpeg');
  res.setHeader('Content-Disposition', 'attachment; filename=image.jpg');
  res.end(data);
}