const express = require('express');
const pool = require('../db');
var jwt = require('jsonwebtoken');

const router = express.Router();



router.post('/', async(req,res)=>{

    const {email,password} = req.body;
    console.log(email,"EMAIL")
    try{
        const userResult = await pool.query(`select * from users where email = $1`, [email]);
        
        if(userResult.rows.length ===0 ){
            return res.status(401).json({error: "email or password Wrong"})
        }

        const user = userResult.rows[0];
        if(user.password !== password ){
            return res.status(401).json({error: "email or password wrong"})
        }
        
        const token = jwt.sign({ id: user.id }, "temp", {
            expiresIn: '1h'
          });

          return res.json({token:token, userId: user.id})
    }
    catch(err){
         console.log(err,"ERRR")
    }

})


module.exports = router;
