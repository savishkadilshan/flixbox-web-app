import { getDbClient } from "../_utils/mongodb/mongoClient";

export default async function getGameDetails() {
    try {
        const client = await getDbClient();
        const database = client.db('FlixBox')
        const collection = database.collection('games')
    
        const data = await collection.find().toArray()
        return data
    } catch (error) {
        console.log("There is an issue while connecting to FlixBox database. Error: ", error)
    }
}