require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./Model/user.model.js');
const path = require('path');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,  // Allow only your frontend domain
  methods: ['GET', 'POST', 'OPTIONS'],  // Allow GET, POST, and OPTIONS methods
  allowedHeaders: ['Content-Type'],  // Allow Content-Type header
  credentials: true,  // Enable credentials (cookies, authorization headers)
};

app.use(cors(corsOptions));

// Optionally, handle OPTIONS requests explicitly
app.options('*', cors(corsOptions));  // Preflight response for all routes

app.use(express.json());

// No need to declare __dirname, it is automatically available
// app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to download CV
app.get('/api/download-cv', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'Resume_pratham.pdf'); 
  res.download(filePath, 'cv.pdf', (err) => {
    if (err) {
      res.status(500).send('Error downloading file.');
    }
  });
});

mongoose.connect(`mongodb+srv://prathamchaudhari124:${process.env.MONGOOSE_PASS}@portfolio.vzokw.mongodb.net/?retryWrites=true&w=majority&appName=portfolio`)
  .then(() => console.log('Successfully connected to Mongodb'));

app.post('/api/contact', async (req, res, next) => {
  const { fullname, email, phone, subject, message } = req.body;
  try {
    const user = new User({ fullname, email, phone, subject, message });
    await user.save();
    return res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
});
app.get('*',(req,res,next)=>{
  res.status(200).json({
    message:'bad request'
  })
})

app.use((err, req, res, next) => {
  res.json({
    status: err.status || 500,
    message: err.message || 'Internal Server Error',
    success: false,
  });
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
