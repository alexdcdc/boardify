import clientPromise from "../../../../lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    const client = await clientPromise;
    const db = client.db('boardify'); 
    const collection = db.collection('users'); 

    const body = await req.json();
    const { email, password} = body;

    var user = await collection.findOne({email: email});
    if (user && bcrypt.compareSync(password, user.password)) {
        return Response.json({status: 200, userId: user._id.toString()});
    }

    return Response.json({status: 401});
}