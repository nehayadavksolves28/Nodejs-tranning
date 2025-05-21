const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, Task } = require('./sequelize');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Sync Sequelize models with DB
sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

// POST route to add a task
app.post('/users', async (req, res) => {
  const { task, status } = req.body;

  try {
    const newTask = await Task.create({ title: task, status });
    res.status(201).json(newTask);
  } catch (err) {
    console.error('Error inserting data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET all tasks
app.get('/users', async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (err) {
    console.error('Error retrieving data:', err);
    res.status(500).json({ error: 'No data found' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
