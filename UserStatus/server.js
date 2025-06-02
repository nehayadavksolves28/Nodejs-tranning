const express = require('express');
const pool = require('./db');
const loginRoutes = require('./routes/login')
const taskRoutes = require('./routes/tasks')
const signupRoutes =require('./routes/signup')
const cors =require('cors')
const app = express();
app.use(cors())
app.use(express.json())
app.use('/login', loginRoutes)
app.use('/tasks', taskRoutes);
app.use('/signup', signupRoutes)

app.listen(5000, ()=>{
  console.log("server running on port 5000")  
});
