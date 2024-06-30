import clientPromise from "../../../../lib/mongodb";
import User from "../../../models/User"
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    const client = await clientPromise;
    const db = client.db('boardify'); 
    const collection = db.collection('users'); 

    const body = await req.json();
    const { email, password } = body;
    if (await collection.findOne({email: email})) {
        return Response.json({status: 409});
    }

    var hash = bcrypt.hashSync(password, 10);
    const newUser = {
        ...body,
        password: hash
    };

    collection.insertOne(newUser);
    return Response.json({status: 200});
}