"use server"

import { decrypt } from "@/app/_utils/session/session";
import { cookies } from "next/headers";
import { ObjectId } from "mongodb";
import { getDbClient } from "@/app/_utils/mongodb/mongoClient";

export async function saveAndUpdateMyList(gameId, gameTitle, coverUrl) {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  try {
    const client = await getDbClient();
    const database = client.db("FlixBox");
    const collection = database.collection("my-list");

    const userGameList = await collection.findOne({
      _id: session?.userId.userEmail,
    });
    const isGameStored = userGameList?.games.some(
      (game) => game.gameId.equals(new ObjectId(gameId))
    );

    try {
      if (isGameStored) {
        // Remove the game from list
        await collection.updateOne(
          { _id: session?.userId.userEmail },
          { $pull: { games: { gameId: new ObjectId(gameId) } } }
        );
      } else {
        // Add new game to the list
        await collection.findOneAndUpdate(
          { _id: session?.userId.userEmail },
          {
            $push: {
              games: {
                gameId: new ObjectId(gameId),
                gameTitle: gameTitle,
                coverUrl: coverUrl
              },
            },
          },
          { upsert: true }
        );
      }
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log("There is an issue while connecting to FlixBox database. Error: ", error);
  }
}

export async function checkGameIsSaved(gameId) {
    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);

    try {
        const client = await getDbClient();
        const database = client.db("FlixBox");
        const collection = database.collection("my-list");

        try {
            const game = await collection.findOne(
                { _id: session?.userId.userEmail, games: { gameId: new ObjectId(gameId) } }
            );
            return !!game;
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log("There is an issue while connecting to FlixBox database. Error: ", error);
    }
}
