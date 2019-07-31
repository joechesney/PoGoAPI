
const { Router } = require('express');

const testRouter = Router();

const { testGetOnePokemonController, testPostController } = require('./controllers');

testRouter.get('/get', testGetOnePokemonController);
testRouter.post('/post', testPostController);

module.exports = testRouter;
