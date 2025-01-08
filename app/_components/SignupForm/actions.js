'use server'

import { getDbClient } from "@/app/_utils/mongodb/mongoClient";

export default async function signup(formData) {
    const bcrypt = require('bcrypt');

    try {
        const client = await getDbClient();
        const database = client.db('FlixBox');
        const collection = database.collection('users');

        const validatedFields = {
            userName: formData.get('name'),
            userEmail: formData.get('email'),
            userPassword: formData.get('password')
        }
    
        const hashedPassword = await bcrypt.hash(validatedFields.userPassword, 10);

        try {
            await collection.insertOne({
                "userName": validatedFields.userName,
                "userEmail": validatedFields.userEmail,
                "userPassword": hashedPassword
            });
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log("There is an issue while connecting to FlixBox database. Error: ", error);
    }
}