'use server'

import { getDbClient } from "@/app/_utils/mongodb/mongoClient";
import { createSession } from "@/app/_utils/session/session";

export default async function signup(prevState, formData) {
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
            const newUser = await collection.insertOne({
                "userName": validatedFields.userName,
                "userEmail": validatedFields.userEmail,
                "userPassword": hashedPassword
            });

            if (newUser) {
                await createSession(validatedFields.userEmail, "normal-user");
                return {
                    success: true,
                    redirectUrl: '/'
                }
            }
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log("There is an error: ", error);
    }
}