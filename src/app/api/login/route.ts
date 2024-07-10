import clientPromise from "../../../../lib/mongodb";
import bcrypt from "bcryptjs";
import { encrypt } from "../../../../lib/auth"

export async function POST(req: Request) {
    const client = await clientPromise;
    const db = client.db('boardify'); 
    const collection = db.collection('users'); 

    const body = await req.json();
    const { email, password } = body;

    const user = await collection.findOne({email: email});
    const userId = user?._id;
    if (user && bcrypt.compareSync(password, user.password)) {
        const session = await encrypt({userId});
        return Response.json({status: 200, userId, session});
    }

    

    return Response.json({status: 401});
}