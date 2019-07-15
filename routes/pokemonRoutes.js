
const { Router } = require('express');

const PokemonRouter = Router();

const { allPokemonController} = require('./controllers');

PokemonRouter.get('/all', allPokemonController);

module.exports = PokemonRouter;
