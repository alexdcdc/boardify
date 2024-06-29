import clientPromise from "../../../../lib/mongodb";

export async function POST(req: Request) {
    const client = await clientPromise;
    const db = client.db('sample_mflix'); 
    const collection = db.collection('movies'); 

    const body = await req.json();
    return Response.json({status: 200});
}