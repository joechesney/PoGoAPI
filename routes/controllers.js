
const { testGetOnePokemon, testPostOnePokemon } = require('./services/routes.services');
const { scrapeOnePokemon, insertOnePokemon } = require('./services/scrape.services');

const allPokemonController = async (req, res, next) => {

  const pokemonObject = await testGetOnePokemon(1);
  const wasInserted = await insertPokemon(pokemonObject);
  res.send(wasInserted)
}
const testGetOnePokemonController = async (req, res, next) => {

  const pokemonObject = await testGetOnePokemon(1);
  
  const wasInserted = await insertPokemon(pokemonObject);
  res.json(wasInserted)
  // return wasInserted;
}
const testPostController = async (req, res, next) => {

  const pokemonObject = await testPostOnePokemon(1);
  const wasInserted = await insertPokemon(pokemonObject);
  res.next(wasInserted)
}

module.exports = {
  allPokemonController,
  testGetOnePokemonController,
  testPostController
}