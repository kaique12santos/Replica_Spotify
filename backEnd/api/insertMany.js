import {artistArray} from "../../frontEnd/src/assets/database/artists.js"
import {songsArray} from "../../frontEnd/src/assets/database/songs.js"
import { db } from "./connection.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
    const newArtistObj = { ...currentArtistObj };
    delete newArtistObj.id;
  
    return newArtistObj;
  });
  
  const newSongsArray = songsArray.map((currentSongObj) => {
    const newSongObj = { ...currentSongObj };
    delete newSongObj.id;
  
    return newSongObj;
  });
  
  const responseSongs = await db.collection("songs").insertMany(newSongsArray);
  const responseArtists = await db
    .collection("artists")
    .insertMany(newArtistArray);
  
  console.log(responseSongs);
  console.log(responseArtists);
  
  // console.log(newArtistArray);
  // console.log(newSongsArray);
  // console.log(songsArray);