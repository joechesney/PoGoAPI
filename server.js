
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./features');
const app = express();
require('dotenv').config();
app.use(bodyParser.json());

const startServer = async () => {
  app.use('/v1', routes);
  app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));
};



startServer()
  .catch((err) => {
    console.log('err : ', err);
    process.exit();
  });
