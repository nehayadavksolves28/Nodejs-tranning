const express = require('express');
const pool = require('../db');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await pool.query(
      `SELECT * FROM users WHERE email = $1`,
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const newUser = await pool.query(
      `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id`,
      [name, email, password] 
    );

    const userId = newUser.rows[0].id;

    const token = jwt.sign({ id: userId }, 'temp', { expiresIn: '1h' });

    res.status(201).json({ token, userId });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
