'use server'

import { MongoClient, ServerApiVersion } from "mongodb"

export default async function signup(formData) {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
    })

    const bcrypt = require('bcrypt')

    try {
        await client.connect()
        const database = client.db('FlixBox')
        const collection = database.collection('users')

        const validatedFields = {
            userName: formData.get('name'),
            userEmail: formData.get('email'),
            userPassword: formData.get('password')
        }
    
        const hashedPassword = await bcrypt.hash(validatedFields.userPassword, 10)

        try {
            await collection.insertOne({
                "userName": validatedFields.userName,
                "userEmail": validatedFields.userEmail,
                "userPassword": hashedPassword
            })
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log("There is an issue while connecting to FlixBox database. Error: ", error)
    } finally {
        await client.close()
    }
}