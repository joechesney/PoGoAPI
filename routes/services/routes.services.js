
const { Pokemon, Moves, Types } = require('../../database/models');

const testGetOnePokemon = async (number) => {
  // 1. Create options object for the request
  const pokemon = await Pokemon.findOne({ where: { number } });
  
  return pokemon;
}

const testPostOnePokemon = async (pokemonObject) => {
  console.log('pokemonObject : ', pokemonObject);
  await Pokemon.create(pokemonObject)
}

module.exports = { 
  testGetOnePokemon,
  testPostOnePokemon
}