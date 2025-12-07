require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./Model/user.model.js');
const path = require('path');
const cors = require('cors');

const app = express();

// CORS options
const corsOptions = {
  origin: process.env.CLIENT_URL,  
  methods: ['GET', 'POST', 'OPTIONS'],  
  allowedHeaders: ['Content-Type'],  
};

app.use(cors(corsOptions));

app.use(express.json());


mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
})
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch((err)=> console.error('mongodb error',err));

// POST endpoint for contact form data
app.post('/api/contact', async (req, res, next) => {
  const { fullname, email, phone, subject, message } = req.body;
  try {
    const user = new User({ fullname, email, phone, subject, message });
    await user.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
});

// Fallback route for any unhandled requests
app.get('*', (req, res) => {
  res.status(400).json({ message: 'Bad Request' });
});

// Global error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    success: false,
  });
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT }`);
});