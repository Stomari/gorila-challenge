const express = require('express');
const mongoose = require('mongoose');
const Investiment = require('../models/Investiment');

const router = express.Router();

/* GET all investiments. */
router.get('/investiments', (req, res) => {
  Investiment.find()
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
});

/* POST register a new investment. */
router.post('/investiments', (req, res) => {
  const { type, value, date } = req.body;

  if (!type || !value || !date) {
    res.status(400).json({ message: 'Missing information!' });
    return;
  }

  const newInvestiment = new Investiment({
    type,
    value,
    date,
  });

  newInvestiment.save()
    .then((response) => res.json({ message: `${response.name} created!` }))
    .catch((error) => res.json(error));
});

/* DELETE an investiment. */
router.delete('/investiment/:investimentID', (req, res) => {
  const { investimentID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(investimentID)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Investiment.findByIdAndDelete(investimentID)
    .then(() => res.json({ message: `Investiment with ID ${investimentID} deleted successfully.` }))
    .catch((error) => res.json(error));
});

module.exports = router;
