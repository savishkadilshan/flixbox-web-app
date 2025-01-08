'use server'

import { app } from "@/app/_utils/firebase/firebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import { getDbClient } from "@/app/_utils/mongodb/mongoClient";

const storage = getStorage(app)

export async function gameUpload(formData) {

    const uuid = await uploadGameCoverImage(formData)
    const imageUrl = await getImageUrl(uuid)

    try {
        const client = await getDbClient();
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
    }
}

async function uploadGameCoverImage(formData) {
    const uuid = uuidv4()
    const imageRef = ref(storage, `flixbox/games/${uuid}`)
    
    try {
        await uploadBytes(imageRef, formData.get('upload-img'))
        console.log("Image upload is successful.")

        /**
         * This uuid return value will be use getImageUrl() function.
         * Why return this uuid? uuid is unique identifier for upload image and that identifier
         * will save as image name.
         * So, getImageUrl() function needs to know what is current uploaded image name and
         * with using return uuid value getImageUrl() function can know about the image
         */
        return uuid
    } catch (error) {
        console.log("There is an issue while uploading game cover image. Error: ", error)
    }
}

/**
 * This getImageUrl() function is needs to fetch uploaded game cover image
 * and return value will be use in the gameUpload() function to store cover image
 * along with the game title in MongoDB document.
 * @param {*} uuid 
 * @returns 
 */
async function getImageUrl(uuid) {
    try {
        const url = await getDownloadURL(ref(storage, `flixbox/games/${uuid}`))
        return url
    } catch (error) {
        console.log("Issue with getting image url. Error: ", error)
    }
}