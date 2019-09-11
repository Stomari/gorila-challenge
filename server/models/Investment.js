const mongoose = require('mongoose');

const { Schema } = mongoose;

const investmentSchema = new Schema({
  type: { type: String, required: true, enum: ['variavel', 'fixa'] },
  value: { type: String, required: true },
  date: { type: String, required: true },
}, {
  timestamps: true,
});

const Investment = mongoose.model('Investment', investmentSchema);
module.exports = Investment;
