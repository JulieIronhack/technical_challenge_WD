const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Load phones data
const phonesData = JSON.parse(fs.readFileSync('./data/phones.json', 'utf-8'));

// Route: Show all phones
app.get('/phones', (req, res) => {
  res.json(phonesData);
});

// Route: Show a phone details
app.get('/phones/:id', (req, res) => {
  const phoneId = parseInt(req.params.id, 10);
  const phone = phonesData.find(p => p.id === phoneId);

  if (phone) {
    res.json(phone);
  } else {
    res.status(404).json({ message: 'Phone not found' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});