// API significa Application Programming Interface
import express from "express"
import cors from "cors";
import { db } from "./connection.js";

const app = express();
const Port = 3030;

app.use(cors());
// app.use(express.json());

app.get('/', (request,response) =>{
    response.send("so vamos trabalhar com '/artists' e '/songs'")
})

app.get('/artists',async (request,response) =>{
    response.send(await db.collection('artists').find({}).toArray())
})

app.get('/songs',async (request,response) =>{
    response.send(await db.collection('songs').find({}).toArray())
})



app.listen(Port,() =>{
    console.log(`servidor esta online na porta: ${Port}`)
})