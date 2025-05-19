const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  getFilteredUsers
} = require('../Controllers/userController');

router.get('/', getAllUsers);
router.get('/search', getFilteredUsers)
router.get('/:id', getUserById);
router.post('/', createUser);
router.delete('/:id', deleteUser);

module.exports = router;
