"use strict";
const { Router } = require('express');
const router = Router();

router.use("/pogo", require('./main/main.routes'))

module.exports = router;