const express = require('express');
const path = require('path');
const app = express();

app.use((req, res, next) => {
  console.log(`Method: ${req.method}  URL: ${req.url}`);
  next(); 
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.status(404).send('Page not found');
});


const PORT = 4500;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
