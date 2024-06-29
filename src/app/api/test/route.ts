import { NextApiRequest, NextApiResponse } from 'next';
import {MongoClient} from "mongodb";

export async function POST(req: NextApiRequest) {
    
    return Response.json({status: 200});
}