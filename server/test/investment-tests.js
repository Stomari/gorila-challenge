const request = require('supertest');
const chai = require('chai');
const mongoose = require('mongoose');
const app = require('../app');
const Investment = require('../models/Investment');

const { expect } = chai;

before((done) => {
  mongoose
    .connect('mongodb://localhost/test', { useNewUrlParser: true })
    .then((db) => {
      console.log(`Connected to Mongo! Database name: "${db.connections[0].name}"`);
      Investment.collection.remove()
        .then(() => {
          const newInvestment = new Investment({
            type: 'fixa',
            value: 'R$100,00',
            date: '2019-09-01',
          });

          newInvestment.save()
            .then(() => done())
            .catch((error) => console.log(error));

        })
        .catch((error) => console.log(error));
    })
    .catch((err) => {
      console.error('Error connecting to mongo', err);
    });
});

describe('Investment routes', () => {
  describe('GET /investments', () => {
    it('should return all investments', (done) => {
      request(app).get('/api/investments')
        .end((err, res) => {
          if (err) throw err;
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('array');
          expect(res.body[0].type).to.be.equal('fixa');
          expect(res.body[0].value).to.be.equal('R$100,00');
          expect(res.body[0].date).to.be.equal('2019-09-01');
          done();
        });
    });
  });

  describe('POST /investments', () => {
    it('should create an investments', (done) => {
      request(app).post('/api/investments')
        .send({ type: 'variavel', value: '200', date: '2019-09-02' })
        .end((err, res) => {
          if (err) throw err;
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.be.equal('Investment created!');
          done();
        });
    });
  });

  describe('DELETE /investments/:investmentID', () => {
    it('should delete specified investment', (done) => {
      Investment.findOne({ value: 'R$100,00' })
        .then((response) => {
          request(app).delete(`/api/investments/${response.id}`)
            .end((err, res) => {
              if (err) throw err;
              expect(res.status).to.equal(200);
              expect(res.body).to.be.an('object');
              expect(res.body.message).to.be.equal(`Investment with ID ${response.id} deleted successfully.`);
              done();
            });
        })
        .catch((error) => console.log(error));
    });
  });
});
