
const { getAllPokemon, getOnePokemon, postOnePokemon } = require('./services/main.services');

const getAllPokemonController = async (req, res, next) => {

  const allPokemon = await getAllPokemon();
  console.log('allPokemon : ', allPokemon);
  res.send(allPokemon)
}
const getOnePokemonController = async (req, res, next) => {
  console.log('req.params : ', req.params);
  const pokemonObject = await getOnePokemon(req.params.number);
  
  res.json(pokemonObject)
}
const postOnePokemonController = async (req, res, next) => {
  console.log('req.body : ', req.body);
  const wasInserted = await postOnePokemon(req.body);
  res.json(wasInserted)
}

module.exports = {
  getAllPokemonController,
  getOnePokemonController,
  postOnePokemonController
}