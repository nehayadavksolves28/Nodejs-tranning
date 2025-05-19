const express = require('express');
const app = express();
const userRoutes = require('./Routes/userRoutes');
const router = express.Router();

app.use(express.json());

// Mount routes
app.use('/api/users', userRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});




//Templete Engine Example
app.set("view engine","ejs")
// app.set('views', './views'); // Optional if views are in default 'views' folder




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
