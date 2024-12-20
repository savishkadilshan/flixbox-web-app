import { MongoClient, ServerApiVersion } from "mongodb";

export default async function getGameDetails() {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI
    const client = new MongoClient(uri, {
        serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
        }
    })

    try {
        await client.connect()
        const database = client.db('FlixBox')
        const collection = database.collection('games')
    
        const data = await collection.find().toArray()
        return data
    } catch (error) {
        console.log("There is an issue while connecting to FlixBox database. Error: ", error)
    } finally {
        await client.close()
    }
}