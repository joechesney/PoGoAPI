const rp = require('request-promise');
const cheerio = require('cheerio');
const getOnePokemon = async (number) => {
  // 1. Create options object for the request
  const options = {
    uri: `https://pokemongo.gamepress.gg/pokemon/${number}`,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36'
    },
    transform: (body) => cheerio.load(body)
  };

  // 2. 
  const pokemonName = await rp(options)
  .then(($) => {
    // get all the stuff out of the html
    // This is where I would take the pokemon's data and insert it into the database
    return $('div#page-title h1').text();
  })
  .catch ((error) => {
    console.log('error : ', error);
  })
  
  return { pokemonName };
}

module.exports = { getOnePokemon }