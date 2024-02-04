import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    switch (req.method) {
        case 'GET':
            try {
                const response = await fetch(
                    'https://reddit.com/r/all.json'
                );

                res.status(200).send(await response.json());
            } catch (e) {
                res.status(400);
            }
            break;
        default:
            res.status(404);
            break;
    }
}