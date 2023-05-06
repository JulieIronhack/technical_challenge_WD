const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Importing the phones.json file
const phones = require('./data/phones.json');

// Phone routes 
app.get('/phones', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json(phones);
});

// Phone Id route
app.get('/phones/:id', (req, res) => {
  const phoneId = parseInt(req.params.id, 10);
  const phone = phones.find(phone => phone.id === phoneId);

  if (!phone) {
    res.status(404).json({ message: 'Phone not found' });
  }

  res.json(phone);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
