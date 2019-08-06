

const { Router } = require('express');

const scrapeRouter = Router();

const { 
  scrapeAllPokemonController,
  scrapeOnePokemonController
} = require('./main.controllers');

// Pokemon
scrapeRouter.post('/all', scrapeAllPokemonController);
scrapeRouter.post('/:number', scrapeOnePokemonController);

// Moves
scrapeRouter.post('/moves', scrapeAllMovesController);

module.exports = scrapeRouter;
