const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');

const JWT_SECRET = "temp";

// Signup
router.post('/signup', async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const user = await User.create({ email, username, password });
    console.log(user,"USER")
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1d' });
    res.status(201).json({ 
      message: 'User created', 
      userId: user._id, 
      token 
    });
  } catch (err) {
    res.status(400).json({ error: 'Email already exists or invalid input' });
  }
});


// Login route (no bcrypt)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email,password,"JDNED")
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
  
    console.log(user._id, "USERID");
  
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1d' });
  
    res.json({
      token,
      userId: user._id
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
  
});


module.exports = router;
