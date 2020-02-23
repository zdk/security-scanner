/* global describe it beforeEach */

const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();

const app = require('../app');
const { Result } = require('../models');

chai.use(chaiHttp);

describe('Result API', () => {
  beforeEach((done) => {
    Result.destroy({
      where: {},
      truncate: true,
    });
    done();
  });
  describe('GET /results', () => {
    it('Getting all results', (done) => {
      chai.request(app).get('/results').end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
    });
  });
});
