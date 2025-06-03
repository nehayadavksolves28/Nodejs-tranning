const express = require('express');
const pool = require('./db');
const authRoutes = require('./routes/auth')
const taskRoutes = require('./routes/tasks')
const cors =require('cors');
const connectDB = require('./db');

connectDB(); 

const app = express();
app.use(cors())
app.use(express.json())
app.use('/', authRoutes)
app.use('/tasks', taskRoutes);



app.listen(5000, ()=>{
  console.log("server running on port 5000")  
});
