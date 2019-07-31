
const { Pokemon, Moves, Types } = require('../../../database/models');

const getAllPokemon = async (number) => {
  // 1. Create options object for the request
  const pokemon = await Pokemon.findAll();
  console.log('pokemon got : ', pokemon);
  return pokemon;
}

const getOnePokemon = async (number) => {
  // 1. Create options object for the request
  const pokemon = await Pokemon.findOne({ where: { number } });
  console.log('pokemon got : ', pokemon);
  return pokemon;
}

const postOnePokemon = async (pokemonObject) => {
  console.log('pokemonObject to post : ', pokemonObject);
  await Pokemon.create(pokemonObject)
}

module.exports = {
  getAllPokemon,
  getOnePokemon,
  postOnePokemon
}