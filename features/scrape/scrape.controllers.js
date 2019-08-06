const { scrapeAllPokemon, scrapeOnePokemon, insertOnePokemon } = require('../scrape/scrape.services');

// Pokemon
const scrapeAllPokemonController = async (req, res, next) => {
  console.log('req.body : ', req.body);

  // 1. send scrape requests to every url for every pokemon
  const allPokemon = await scrapeAllPokemon(req.body);
  // 2a. Take scraped pokemon objects delete pokemon with same number and alolan boolean 
  // 2b. If delete is successful, take scraped pokemon objects and insert them into database
  const insertedPokemon = await insertedPokemon(allPokemon);

  res.json(insertedPokemon)
}

const scrapeOnePokemonController = async (req, res, next) => {
  console.log('req.body : ', req.body);
  console.log('req.params : ', req.params);
  // 1. take pokemon number from req.params and scrape the pokemon with that number
  const wasInserted = await postOnePokemon(req.body);
  // 2. 

  res.json(wasInserted)
}

// Moves
const scrapeAllMovesController = async (req, res, next) => {
  // This needs to do several things:
  // 1. Scrape all named moves from 
  console.log('req.body : ', req.body);
  const wasInserted = await postOnePokemon(req.body);
  res.json(wasInserted)
}

module.exports = {
  scrapeAllPokemonController,
  scrapeOnePokemonController,
  scrapeAllMovesController
}
