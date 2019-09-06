const mongoose = require('mongoose');

const { Schema } = mongoose;

const investimentSchema = new Schema({
  type: { type: String, required: true, enum: ['variavel', 'fixa'] },
  value: { type: String, required: true },
  date: { type: String, required: true },
}, {
  timestamps: true,
});

const Investiment = mongoose.model('Investiment', investimentSchema);
module.exports = Investiment;
