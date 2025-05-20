// const express = require('express');
// const app = express();
// const userRoutes = require('./Routes/userRoutes');
// const router = express.Router();

// app.use(express.json());

// // Mount routes
// app.use('/api/users', userRoutes);

// // 404 handler
// app.use((req, res) => {
//   res.status(404).send('Not Found');
// });

// // Error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Server Error');
// });




// //Templete Engine Example
// app.set("view engine","ejs")
// // app.set('views', './views'); // Optional if views are in default 'views' folder




// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// GET: Show the form
app.get('/', (req, res) => {
  res.render('form');
});

// POST: Handle form submission
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.render('result', { name, email });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
