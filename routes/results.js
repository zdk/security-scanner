const express = require('express');

const router = express.Router();

const { index, create, show } = require('../controllers/result');

router.get('/', index);
router.post('/', create);
router.get('/:id', show);

module.exports = router;
