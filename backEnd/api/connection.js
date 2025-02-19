import { MongoClient } from "mongodb";

const URL = "mongodb+srv://kaique1:3vW8b5y1a7EZCorG@cluster0.e6r60.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client =  new MongoClient(URL)

export const db = client.db("spotifyAula");
// const songCollection = await db.collection('songs').find({}).toArray();



// console.log(songCollection);