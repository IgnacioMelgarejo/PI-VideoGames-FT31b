const { Gender } = require("../db");
const { API_KEY } = process.env;
const axios = require("axios")


const Get_Genres = async () => {
    var generos = []
    let genresApi = await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`)

    genresApi.data.results.map(e => generos.push(e.name));
    
    generos.map(async (d) => {
        await Gender.create({ name: d });
    });
}

const all_genres = async (req, res) => {
    try {
        const genresDb = await Gender.findAll()
        if (genresDb.length === 0) await Get_Genres()
        res.status(200).send(genresDb)
    } catch (error) {
        res.status(404).send(error)
    }
}



module.exports = { all_genres, Get_Genres };