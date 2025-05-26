const express = require('express');
const router = express.Router();
const Person = require('../models/personSchema');

// GET all persons
router.get('/', async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch persons' });
  }
});

// POST a new person
router.post('/', async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    const savedPerson = await newPerson.save();
    res.status(201).json(savedPerson);
  } catch (err) {
    res.status(400).json({ error: 'Failed to save person' });
  }
});

module.exports = router;
