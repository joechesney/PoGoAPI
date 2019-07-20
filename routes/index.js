"use strict";
const { Router } = require('express');
const router = Router();

router.use("/test", require('./testRoutes'))
router.use("/pokemon", require('./pokemonRoutes'))

module.exports = router;