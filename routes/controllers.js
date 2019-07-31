
const { testGetOnePokemon, testPostOnePokemon, insertPokemon } = require('./services/routes.services');
const { scrapeOnePokemon, insertOnePokemon } = require('./services/scrape.services');

const allPokemonController = async (req, res, next) => {

  const pokemonObject = await testGetOnePokemon(1);
  const wasInserted = await insertPokemon(pokemonObject);
  res.send(wasInserted)
}
const testGetOnePokemonController = async (req, res, next) => {

  const pokemonObject = await testGetOnePokemon(1);
  
  res.json(pokemonObject)
}
const testPostController = async (req, res, next) => {
  console.log('req.body : ', req.body);
  const wasInserted = await testPostOnePokemon(req.body);
  res.json(wasInserted)
}

module.exports = {
  allPokemonController,
  testGetOnePokemonController,
  testPostController
}