const request = require('supertest');
const chai = require('chai');
const mongoose = require('mongoose');
const app = require('../app');
const Investiment = require('../models/Investiment');

const { expect } = chai;

before((done) => {
  mongoose
    .connect('mongodb://localhost/test', { useNewUrlParser: true })
    .then((db) => {
      console.log(`Connected to Mongo! Database name: "${db.connections[0].name}"`);
      Investiment.collection.remove()
        .then(() => {
          const newInvestiment = new Investiment({
            type: 'fixa',
            value: 'R$100,00',
            date: '2019-09-01',
          });

          newInvestiment.save()
            .then(() => done())
            .catch((error) => console.log(error));

        })
        .catch((error) => console.log(error));
    })
    .catch((err) => {
      console.error('Error connecting to mongo', err);
    });
});

describe('Investiment routes', () => {
  describe('GET /investiments', () => {
    it('should return all investiments', (done) => {
      request(app).get('/api/investiments')
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

  describe('POST /investiments', () => {
    it('should create an investiments', (done) => {
      request(app).post('/api/investiments')
        .send({ type: 'variavel', value: '200', date: '2019-09-02' })
        .end((err, res) => {
          if (err) throw err;
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.be.equal('Investiment created!');
          done();
        });
    });
  });

  describe('DELETE /investiments/:investimentID', () => {
    it('should delete specified investiment', (done) => {
      Investiment.findOne({ value: 'R$100,00' })
        .then((response) => {
          request(app).delete(`/api/investiments/${response.id}`)
            .end((err, res) => {
              if (err) throw err;
              expect(res.status).to.equal(200);
              expect(res.body).to.be.an('object');
              expect(res.body.message).to.be.equal(`Investiment with ID ${response.id} deleted successfully.`);
              done();
            });
        })
        .catch((error) => console.log(error));
    });
  });
});
