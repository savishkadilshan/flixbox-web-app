'use server'

import { decrypt } from "@/app/_utils/session/session";
import { cookies } from "next/headers";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb"

export default async function saveGameInUserMyList(gameId) {
    const cookie = (await cookies()).get('session')?.value;
    const session = await decrypt(cookie);

    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
    });
    console.log("User: ", session?.userId.userEmail);
    console.log("Game ID: ", gameId)

    try {
        await client.connect();
        const database = client.db('FlixBox');
        const collection = database.collection('my-list');

        try {
            await collection.findOneAndUpdate(
                { _id: session?.userId.userEmail },
                {
                    $push: {
                        games: {
                            gameId: new ObjectId(gameId)
                        }
                    }
                },
                { returnDocument: "after", upsert: true }
            );
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log("There is an issue while connecting to FlixBox database. Error: ", error);
    } finally {
        await client.close();
    }
}