const {Router} = require("express")
const {all_genres} = require("../controllers/genders.js")

const genderRouter = Router()

genderRouter.get("/", all_genres )


module.exports = genderRouter;