'use server'

import { getDbClient } from "@/app/_utils/mongodb/mongoClient";
import { createSession } from "@/app/_utils/session/session";

export async function adminLogin(prevState, formData) {
    const username = formData.get('username')
    const password = formData.get('password')

    try {
        const client = await getDbClient();
        const database = client.db('FlixBox')
        const collection = database.collection('admin')

        const data = await collection.findOne({username: username, password: password})
        if(data) {
            await createSession(username, 'admin')
            return {
                success: true,
                redirectUrl: '/admin'
            }
        }
    } catch (error) {
        console.log("There is an issue while connecting to FlixBox database. Error: ", error)
    }
}