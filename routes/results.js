const express = require('express');

const router = express.Router();

const { index } = require('../controllers/result');

router
  .route('/results')
  .get(index);

module.exports = router;
