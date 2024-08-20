import clientPromise from "../../../../../lib/mongodb";
import { ObjectId } from "mongodb"

export async function GET(req: Request, { params } : { params: { boardId: string } }) {
    const client = await clientPromise;
    const db = client.db("boardify");
    const collection = db.collection("boards");
    const { boardId } = params;

    const result = await collection.findOne({ _id: ObjectId.createFromHexString(boardId) });

    if (!result) {
        return Response.json({ status: 404 });
    }

    const { _id, ...resultContent } = result;

    return Response.json({ status: 200, doc: resultContent });
}

export async function POST(req: Request, { params } : { params: { boardId: string } }) {
    const client = await clientPromise;
    const db = client.db("boardify");
    const collection = db.collection("boards");
    
    const { boardId } = params;
    const { newData } = await req.json()

    const result = await collection.findOneAndReplace({ _id: ObjectId.createFromHexString(boardId) }, newData);

    if (!result) {
        return Response.json({ status: 404 });
    }

    return Response.json({ status: 200 });
}