"use strict";
const { Router } = require('express');
const router = Router();

router.use("/pokemon", require('./pokemonRoutes'))

module.exports = router;