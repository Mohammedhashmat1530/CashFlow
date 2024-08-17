const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  expense: {
    type: Number,
    required: true
  },
  expenseType: {
    type: String,
    required: true,
  },
  occurance: {
    type: Boolean,
  },
  timeperiod:{
    type:Number
  }
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
