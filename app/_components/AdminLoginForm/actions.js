'use server'

import { MongoClient, ServerApiVersion } from "mongodb";

export async function adminLogin(prevState, formData) {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI
    const username = formData.get('username')
    const password = formData.get('password')

    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
    });

    try {
        await client.connect()
        const database = client.db('FlixBox')
        const collection = database.collection('admin')

        const data = await collection.findOne({username: username, password: password})
        if(data) {
            console.log("User credentials are found.")
            console.log(data)
            
            return {
                success: true,
                redirectUrl: '/admin'
            }
        }
    } catch (error) {
        console.log("There is an issue while connecting to FlixBox database. Error: ", error)
    } finally {
        await client.close()
    }
}