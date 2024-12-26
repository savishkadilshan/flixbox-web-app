"use server";

import { createSession } from "@/app/_utils/session/session";
import { MongoClient, ServerApiVersion } from "mongodb";

export default async function login(prevState, formData) {
  const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  const bcrypt = require("bcrypt");

  try {
    await client.connect();
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
  } finally {
    await client.close();
  }
}
