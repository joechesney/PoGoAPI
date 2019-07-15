
const { getOnePokemon } = require('./routes.services');
const allPokemonController = async (req, res, next) => {

  const pokemonObject = await getOnePokemon(1);
  res.send(pokemonObject)
}

module.exports = {
  allPokemonController
}