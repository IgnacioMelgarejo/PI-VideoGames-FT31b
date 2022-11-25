const { Router } = require("express");
const { get_VideoGames, post_Video_Games, get_id_videoGame } = require("../controllers/videoGames.js")

const videoGamesRouter = Router();

videoGamesRouter.get("/", get_VideoGames)

videoGamesRouter.post("/", post_Video_Games)

videoGamesRouter.get("/:id", get_id_videoGame)



module.exports = videoGamesRouter;