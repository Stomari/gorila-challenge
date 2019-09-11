const express = require('express');
const mongoose = require('mongoose');
const Investment = require('../models/Investment');

const router = express.Router();

/* GET all investments. */
router.get('/investments', (req, res) => {
  Investment.find()
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
});

/* POST register a new investment. */
router.post('/investments', (req, res) => {
  let { type, value, date } = req.body;

  // Currency transformation logic.
  if (!value.includes('.')) {
    value += '.00';
  }
  const number = value.split('.');
  let editedNumber = '';
  let counter = 1;

  for (let i = number[0].length - 1; i >= 0; i -= 1) {
    editedNumber = number[0][i] + editedNumber;
    if (counter % 3 === 0 && counter !== 1 && i !== 0) {
      editedNumber = `.${editedNumber}`;
    }
    counter += 1;
  }

  editedNumber += `,${number[1].slice(0, 2)}`;
  value = `R$${editedNumber}`;

  if (!type || !value || !date) {
    res.status(400).json({ message: 'Missing information!' });
    return;
  }

  const newInvestment = new Investment({
    type,
    value,
    date,
  });

  newInvestment.save()
    .then(() => res.json({ message: 'Investment created!' }))
    .catch((error) => res.json(error));
});

/* DELETE an investment. */
router.delete('/investments/:investmentID', (req, res) => {
  const { investmentID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(investmentID)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Investment.findByIdAndDelete(investmentID)
    .then(() => res.json({ message: `Investment with ID ${investmentID} deleted successfully.` }))
    .catch((error) => res.json(error));
});

module.exports = router;
