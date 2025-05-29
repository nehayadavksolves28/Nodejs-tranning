const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const productRoutes = require('./routes/products');
const errorMiddleware = require('./middleware/errorMiddleware');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.use(cors());
app.use(morgan("tiny"))
// app.use(express.json());
app.use('/api/products', productRoutes);
app.use(errorMiddleware)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
