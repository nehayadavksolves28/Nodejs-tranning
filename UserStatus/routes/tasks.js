const express = require('express');
const router = express.Router();
const Task = require('../models/taskSchema');
const verifyToken = require('../middleWare/authMiddleWare');




router.post('/', verifyToken, async (req, res) => {
  const { task, isCompleted } = req.body;
  console.log(req.user.userId)
  try {
    const newTask = await Task.create({ task, isCompleted, userId: req.user.userId });
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ error: 'Invalid task data' });
  }
});

router.get('/', verifyToken, async (req, res) => {
  const tasks = await Task.find({ userId: req.user.userId });
  res.json(tasks);
});

router.put('/:id', verifyToken, async (req, res) => {
  try {
    const updatedTask = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      req.body,
      { new: true }
    );
    if (!updatedTask) return res.sendStatus(404);
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const deleted = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });
    if (!deleted) return res.sendStatus(404);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid task ID' });
  }
});

module.exports = router;
