import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest) {
    return Response.json({status: 200});
}