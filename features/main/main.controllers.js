
const { getAllPokemon, getOnePokemon } = require('./services/main.services');

// Returns all non-deleted pokemon in the database, sorted by number
const getAllPokemonController = async (req, res, next) => {
  const allPokemon = await getAllPokemon();
  res.json(allPokemon)
}
const getOnePokemonController = async (req, res, next) => {
  console.log('req.params : ', req.params);
  const pokemonObject = await getOnePokemon(req.params.number);
  res.json(pokemonObject)
}

module.exports = {
  getAllPokemonController,
  getOnePokemonController
}
