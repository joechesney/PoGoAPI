
const { Router } = require('express');

const testRouter = Router();

const { testGetOnePokemonController, testPostController } = require('./controllers');

testRouter.get('/get', testGetOnePokemonController);
testRouter.post('/pokemon', testPostController);

module.exports = testRouter;
