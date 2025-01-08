'use server'

import { getDbClient } from "@/app/_utils/mongodb/mongoClient";

export async function adminLogin(prevState, formData) {
    const username = formData.get('username')
    const password = formData.get('password')

    try {
        const client = await getDbClient();
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
    }
}