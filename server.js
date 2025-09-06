// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ----------------------
// Middleware
// ----------------------
app.use(express.json());

// Enable CORS for your frontend
app.use(cors({
  origin: 'http://localhost:5173', // frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // if you need cookies/auth headers
}));

// ----------------------
// MongoDB Connection
// ----------------------
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection failed:', err));

// ----------------------
// Routes
// ----------------------
// Adjust this path to your auth route file
app.use('/api/auth', require('./routes/auth'));

// Example test route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// ----------------------
// Start Server
// ----------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
