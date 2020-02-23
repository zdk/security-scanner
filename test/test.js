/* global describe it beforeEach */

const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();

const app = require('../app');
const {
  Result,
} = require('../models');

chai.use(chaiHttp);

describe('Result API', () => {
  beforeEach((done) => {
    Result.destroy({
      where: {},
      truncate: true,
    });
    done();
  });

  describe('GET /', () => {
    it('Getting all results', (done) => {
      chai.request(app).get('/').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
    });
  });

  describe('POST /', () => {
    it('Submit a new scan', (done) => {
      const req = {
        repositoryName: 'https://github.com/nodejs/node',
      };
      chai.request(app).post('/').send(req).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.repositoryName.should.equal(req.repositoryName);
        res.body.findings.should.have.any.keys('findings');
        done();
      });
    });
  });
});
