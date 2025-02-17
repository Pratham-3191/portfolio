require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./Model/user.model.js');
const path = require('path');
const cors = require('cors');

const app = express();
console.log(process.env.CLIENT_URL)

// CORS options
const corsOptions = {
  origin: process.env.CLIENT_URL,  // Allow only your frontend domain
  methods: ['GET', 'POST', 'OPTIONS'],  // Allow GET, POST, and OPTIONS methods
  allowedHeaders: ['Content-Type'],  // Allow Content-Type header
};

// Enable CORS with the specified options
app.use(cors(corsOptions));



app.use(express.json());

// Endpoint to download CV
app.use('/public', express.static(path.join(__dirname, 'public')));

// Endpoint to download CV
app.get('/api/download-cv', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'Resume_pratham.pdf');
  console.log('Resolved File Path:', filePath);

  res.setHeader('Content-Type', 'application/pdf'); // Set the correct MIME type
  res.setHeader('Content-Disposition', 'attachment; filename="Resume_pratham.pdf"');
  
  res.download(filePath, (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      res.status(500).send('Error downloading file.');
    }
  });
});


// Connect to MongoDB
mongoose.connect(`mongodb+srv://prathamchaudhari124:${process.env.MONGOOSE_PASS}@portfolio.vzokw.mongodb.net/?retryWrites=true&w=majority&appName=portfolio`)
  .then(() => console.log('Successfully connected to MongoDB'));

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
  console.log(`Server is running on port ${PORT}`);
});