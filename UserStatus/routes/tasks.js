const express = require('express');
const pool = require('../db');
const verifyToken = require('../middleWare/authMiddleWare');

const router = express.Router();

router.post('/',verifyToken,async(req,res)=>{
 
    const {task,isCompleted, userId} = req.body;

    try{
       const result = await pool.query(`insert into tasks (task, iscompleted, userId) values ($1, $2, $3)`, [task,isCompleted, userId]);
       if(result.rowCount ===1){
         return res.status(200).json({message: "User Created successfully"})
       }
    }
    catch(err){
        console.log(err)
       return res.status(500).json({error: "Internal server error"})
    }
});

router.get('/', verifyToken, async (req, res) => {
    const userId = req.user.id;
    console.log(userId,"USERID")
  
    try {
      const result = await pool.query(
        'SELECT * FROM tasks WHERE userId = $1',
        [userId]
      );
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });
  
router.put('/:taskId',verifyToken,async(req,res) => {
   const {task, isCompleted}= req.body;
   const taskId = req.params.taskId;
   console.log(taskId,"IDD")
   try{
     const taskResult = await pool.query(`update tasks set task = $1, iscompleted=$2 where task_id = $3`, [task,isCompleted, taskId]);
     if(taskResult.rowCount === 1){
        return res.status(200).json({message:"Data updated SUccessfully"})
     }
   }
   catch(err){
      return res.status(500).json({message: "Interna sever error"})
   }
})


router.delete('/:taskId',verifyToken, async(req,res) => {
    const taskId = req.params.taskId;
    try{
      const taskResult = await pool.query(`delete from tasks where task_id = $1`, [taskId]);
      if(taskResult.rowCount === 1){
         return res.status(200).json({message:"Data deleted SUccessfully"})
      }
    }
    catch(err){
        console.log(err)
       return res.status(500).json({message: "Interna server error"})
    }
 })

module.exports= router;