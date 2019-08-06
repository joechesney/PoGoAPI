
const { Router } = require('express');

const pokemonRouter = Router();

const { 
  getAllPokemonController,
  getOnePokemonController
} = require('./main.controllers');

pokemonRouter.get('/all', getAllPokemonController);
pokemonRouter.get('/pokemon/:number', getOnePokemonController);

module.exports = pokemonRouter;
