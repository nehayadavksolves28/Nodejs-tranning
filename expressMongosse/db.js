// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://nehayadav:QWtmEVEfv2mVqeyc@cluster0.p2b66bs.mongodb.net/Company?retryWrites=true&w=majority&appName=Cluster0";
    await mongoose.connect(uri);
    console.log('MongoDB connected!');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
