import express from "express";
import { PlaylistBusiness } from "../business/PlaylistBusiness";
import { PlaylistController } from "../controller/PlaylistController";
import { PlaylistDatabase } from "../database/PlaylistDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManeger";

export const playlistRouter = express.Router();

const playlistController = new PlaylistController(
  new PlaylistBusiness(
    new PlaylistDatabase(),
    new IdGenerator(),
    new TokenManager()
  )
);

playlistRouter.post("/", playlistController.createPlaylist);

playlistRouter.get("/", playlistController.getPlaylists)
