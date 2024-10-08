import { SignJWT, jwtVerify } from "jose";
import env from "./env"

const key = new TextEncoder().encode(env.JWT_SECRET);
const expirationTimeMs = 120 * 3600 * 1000; //120 mins

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(new Date(Date.now() + expirationTimeMs))
        .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
}


