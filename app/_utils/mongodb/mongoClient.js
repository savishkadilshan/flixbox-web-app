import { MongoClient, ServerApiVersion } from "mongodb";

let client;
let clientPromise;

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

if (!clientPromise) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  clientPromise = client.connect();
}

export async function getDbClient() {
  try {
    return await clientPromise;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}
