const express = require('express');
const connectDB = require('./db');
const personRoutes = require('./routes/personRoutes');

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON

connectDB(); // Connect to MongoDB

app.use('/api/persons', personRoutes); // Routes

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
