import clientPromise from "../../../../lib/mongodb";
import { ObjectId } from "mongodb"

export async function POST(req: Request) {
    const client = await clientPromise;
    const db = client.db("boardify");
    const collection = db.collection("boards");

    const body = await req.json();
    const { userId } = body;

    var newDoc = { ownerId: ObjectId.createFromHexString(userId), name: "Untitled Document", lastOpened: new Date() }
    const docId = (await collection.insertOne(newDoc)).insertedId.toString();

    return Response.json({ status: 200, docId: docId });
}

export async function GET(req: Request) {
    const client = await clientPromise;
    const db = client.db("boardify");
    const collection = db.collection("boards");
    const url = new URL(req.url);
    const ownerId = url.searchParams.get("ownerId")

    if (!ownerId) {
        return Response.json({ status: 404 });
    }

    const docs = [];
    const results = collection.find({ ownerId: ObjectId.createFromHexString(ownerId) });

    for await (const doc of results) {
        docs.push(
            {
                ...doc,
                _id: doc._id.toString(),
            }
        );
    }


    if (!docs) {
        return Response.json({ status: 404 });
    }

    return Response.json({ status: 200, docs: docs });
}
