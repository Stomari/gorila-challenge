require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then((db) => {
    console.log(`Connected to Mongo! Database name: "${db.connections[0].name}"`);
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });

const app = express();

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const router = express.Router();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);


// Routes
const investmentRouter = require('./routes/investment');

app.use('/api', investmentRouter);

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(`${__dirname}/public/index.html`);
});

module.exports = app;
