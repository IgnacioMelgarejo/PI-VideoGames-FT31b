const { Router } = require('express');
const videoGamesRouter = require("./videoGamesRouter.js")
const genderRouter = require("./genderRoute.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", videoGamesRouter);

router.use("/gender", genderRouter)


module.exports = router;
