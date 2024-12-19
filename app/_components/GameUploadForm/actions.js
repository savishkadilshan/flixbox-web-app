'use server'

import { MongoClient, ServerApiVersion } from "mongodb";
import { app } from "@/app/_utils/firebase/firebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

const storage = getStorage(app)
const uuid = uuidv4()

export async function gameUpload(formData) {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
    });

    await uploadGameCoverImage(formData)
    const imageUrl = await getImageUrl()

    try {
        await client.connect()
        const database = client.db('FlixBox')
        const collection = database.collection('games')

        try {
            await collection.insertOne({ 
                gameTitle: formData.get('game-title'), 
                coverUrl: imageUrl 
            })
        } catch (error) {
            console.log("There is an issue with document inserting. Error: ", error)
        }
    } catch (error) {
        console.log("There is an issue: ", error)
    } finally {
        await client.close()
    }
}

async function uploadGameCoverImage(formData) {
    const imageRef = ref(storage, `flixbox/games/${uuid}`)
    
    try {
        await uploadBytes(imageRef, formData.get('upload-img'))
        console.log("Image upload is successful.")
    } catch (error) {
        console.log("There is an issue while uploading game cover image. Error: ", error)
    }
}

/*
 This getImageUrl() function is needs to fetch uploaded game cover image
 and return value will be use in the gameUpload() function to store cover image
 along with the game title in MongoDB document.
*/
async function getImageUrl() {
    try {
        const url = await getDownloadURL(ref(storage, `flixbox/games/${uuid}`))
        return url
    } catch (error) {
        console.log("Issue with getting image url. Error: ", error)
    }
}