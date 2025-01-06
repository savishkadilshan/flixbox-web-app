import { MongoClient, ServerApiVersion } from "mongodb";
import { cookies } from "next/headers";
import { decrypt } from "../_utils/session/session";

export default async function getMyList() {
    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);

    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    const client = new MongoClient(uri, {
        serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
        },
    });

    try {
        await client.connect();
        const database = client.db("FlixBox");
        const collection = database.collection("my-list");

        const userMyListDoc = await collection.findOne({ _id: session?.userId.userEmail });
        return userMyListDoc;
    } catch (error) {
        console.log("There is an issue while connecting to FlixBox database. Error: ", error);
    } finally {
        await client.close();
    }
}