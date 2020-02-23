const express = require('express');
const {
  Result,
} = require('../models');

const router = express.Router();

function index(req, resp) {
  Result.findAll().then((result) => {
    resp.status(200).json(result);
  });
}


function create(req, resp) {
  const {
    repositoryName,
  } = req.body;

  const findings = {
    findings: [{
      type: 'sast',
      ruleId: 'G402',
      location: {
        path: 'connectors/apigateway.go',
        positions: {
          begin: {
            line: 60,
          },
        },
      },
      metadata: {
        description: 'TLS InsecureSkipVerify set true.',
        severity: 'HIGH',
      },
    },
    {
      type: 'sast',
      ruleId: 'G404',
      location: {
        path: 'util/util.go',
        positions: {
          begin: {
            line: 32,
          },
        },
      },
      metadata: {
        description: 'Use of weak random number generator (math/rand instead of crypto/rand)',
        severity: 'HIGH',
      },
    },
    ],
  };

  Result.create({
    repositoryName,
    findings,
  }).then((result) => {
    resp.status(200).json(result);
  }).error((err) => {
    resp.status(405).json('Error has occured');
  });
}

module.exports = {
  index,
  create,
};
