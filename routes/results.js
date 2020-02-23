const express = require('express');

const router = express.Router();

const { index } = require('../controllers/result');

router.get('/', index);

module.exports = router;
