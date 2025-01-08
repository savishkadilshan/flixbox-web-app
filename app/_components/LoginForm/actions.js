"use server";

import { getDbClient } from "@/app/_utils/mongodb/mongoClient";
import { createSession } from "@/app/_utils/session/session";

export default async function login(prevState, formData) {
  const bcrypt = require("bcrypt");

  try {
    const client = await getDbClient();
    const database = client.db("FlixBox");
    const collection = database.collection("users");

    const validatedFields = {
      userEmail: formData.get("email"),
      userPassword: formData.get("password"),
    };

    const storedEmailInDatabase = await collection.findOne({
      userEmail: { $eq: validatedFields.userEmail },
    });

    const storedPasswordInDatabase = await collection.findOne(
      {
        userEmail: { $eq: validatedFields.userEmail },
      },
      {
        projection: { _id: 0, userName: 0, userEmail: 0 },
      }
    );

    const comparedPassword = await bcrypt.compare(validatedFields.userPassword, storedPasswordInDatabase.userPassword)

    if(storedEmailInDatabase && comparedPassword) {
        console.log("Login successful")
        await createSession(storedEmailInDatabase)
        return {
            success: true,
            redirectUrl: '/'
        }
    } else {
        console.log("Login failed")
    }
  } catch (error) {
    console.log(
      "There is an issue while connecting to FlixBox database. Error: ",
      error
    );
  }
}
