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
router.get("/report", (req,res)=>{
    console.log("HHH")
    res.render("report",{
        title: 'EJS modules',
        items: ['item1', 'item2', 'item3']
    })
})
module.exports = router;
