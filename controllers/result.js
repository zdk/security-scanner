const express = require('express');
const { Result } = require('../models');

const router = express.Router();

function index(req, resp) {
  Result.findAll().then((result) => {
    resp.status(200).json(result);
  });
}

module.exports = {
  index,
};
