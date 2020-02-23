const express = require('express');

const router = express.Router();

const {
  index,
  create,
  show,
  update,
} = require('../controllers/result');

router.get('/', index);
router.post('/', create);
router.get('/:id', show);
router.put('/:id', update);

module.exports = router;
