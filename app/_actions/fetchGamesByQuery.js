'use server'

import { getDbClient } from "../_utils/mongodb/mongoClient";

export default async function fetchGamesByQuery(query) {
    try {
        const client = await getDbClient();
        const database = client.db('FlixBox');
        const collection = database.collection('games');
    
        if (query !== '') {
            const data = await collection.find(
                { gameTitle: { $regex: query, $options: 'i' } },
                { gameTitle: 1, coverUrl: 1 }
            ).toArray();
    
            if (data) {
                return data;
            }
        } else {
            return '';
        }
    } catch (error) {
        console.log("There is an issue while connecting to FlixBox database. Error: ", error);
    }
}