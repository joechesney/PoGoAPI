
const { Pokemon, Moves, Types } = require('../../../database/models');

// Get all non-deleted pokemon, sorted by number
const getAllPokemon = async (number) => {
  const allPokemon = await Pokemon.findAll({
    order: [ ['number', 'ASC'] ]
  });
  // console.log('pokemon got : ', allPokemon);
  return allPokemon;
}

const getOnePokemon = async (number) => {
  // 1. Get the pokemon and their associated moves
  const pokemon = await Pokemon.findOne({
    where: { number },
    // include: {}
  });
  // console.log('pokemon got : ', pokemon);
  return pokemon;
}

module.exports = {
  getAllPokemon,
  getOnePokemon
}
