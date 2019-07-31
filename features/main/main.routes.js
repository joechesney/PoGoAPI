
const { Router } = require('express');

const pokemonRouter = Router();

const { getAllPokemonController} = require('./main.controllers');

pokemonRouter.get('/all', getAllPokemonController);
// pokemonRouter.get('/pokemon:number', testGetOnePokemonController);
// pokemonRouter.post('/pokemon', testPostController);

module.exports = pokemonRouter;
