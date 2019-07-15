const request = require('request');
const cheerio = require('cheerio');
const getOnePokemon = async (number) => {
  return {
    name: 'mankey',
    number
  }
}

module.exports = {
  getOnePokemon
}