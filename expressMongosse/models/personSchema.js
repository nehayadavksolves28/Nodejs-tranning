const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model('Person', personSchema, 'People'); // Explicitly using 'People' collection

module.exports = Person;
