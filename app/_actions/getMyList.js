import { cookies } from "next/headers";
import { decrypt } from "../_utils/session/session";
import { getDbClient } from "../_utils/mongodb/mongoClient";

export default async function getMyList() {
    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);

    try {
        const client = await getDbClient();
        const database = client.db("FlixBox");
        const collection = database.collection("my-list");

        const userMyListDoc = await collection.findOne({ _id: session?.userId.userEmail });

        if (userMyListDoc === null) {
            return "";
        } else {
            return userMyListDoc;
        }
    } catch (error) {
        console.log("There is an issue while connecting to FlixBox database. Error: ", error);
    }
}