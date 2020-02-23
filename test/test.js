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

  describe('GET /:id', () => {
    it('Get result by id', (done) => {
      Result.create({
        repositoryName: 'https://github.com/nodejs/node',
      }).then((result) => {
        chai.request(app).get(`/${result.id}`).end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
      });
    });

    it('Get result by not existed id', (done) => {
      chai.request(app).get('/111').end((err, res) => {
        res.should.have.status(404);
        res.body.should.equal('Not found');
        done();
      });
    });
  });

  describe('PUT /:id results', () => {
    it('Update result by id', (done) => {
      Result.create({
        repositoryName: 'https://github.com/nodejs/node',
      }).then((result) => {
        const resultEdit = {
          repositoryName: 'git@github.com:nodejs/node',
        };
        chai.request(app).put(`/${result.id}`).send(resultEdit).end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
      });
    });
  });


  describe('DELETE /:id results', () => {
    it('Delete result by id', (done) => {
      Result.create({
        repositoryName: 'https://github.com/nodejs/node',
      }).then((result) => {
        chai.request(app).delete(result.id).end((err, res) => {
          res.should.have.status(200);
          res.body.should.equal(1);
          done();
        });
      });
    });
  });
});
