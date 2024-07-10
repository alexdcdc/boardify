import clientPromise from "../../../../lib/mongodb";
import { ObjectId } from "mongodb"

export async function POST(req: Request) {
    const client = await clientPromise;
    const db = client.db('boardify'); 
    const collection = db.collection('boards'); 

    const body = await req.json();
    const { userId } = body;

    var newDoc = {ownerId: new ObjectId(userId)}
    const docId = (await collection.insertOne(newDoc)).insertedId.toString();

    return Response.json({status: 200, docId: docId});
}

export async function GET(req: Request) {
    const client = await clientPromise;
    const db = client.db('boardify'); 
    const collection = db.collection('boards'); 

    const body = await req.json();
    const { docId } = body;

    const doc = await collection.findOne({_id: new ObjectId(docId)})

    if (!doc) {
        return Response.json({status: 404});
    }

    return Response.json({status: 200, doc: doc});
}