const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 4000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the client build directory
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/phones', (req, res) => {
  console.log('Received request for /phones');
  fs.readFile('./server/data/phones.json', 'utf8', (err, jsonString) => {
    if (err) {
      console.log("File read failed: ", err);
      return res.status(500).send('Error reading phone data');
    }
    res.send(JSON.parse(jsonString));
  });
});

app.get('/phones/:id', (req, res) => {
  console.log(`Received request for /phones/${req.params.id}`);
  fs.readFile('./server/data/phones.json', 'utf8', (err, jsonString) => {
    if (err) {
      console.log("File read failed: ", err);
      return res.status(500).send('Error reading phone data');
    }
    const phones = JSON.parse(jsonString);
    const phone = phones.find((phone) => phone.id == req.params.id);
    if (!phone) {
      return res.status(404).send('Phone not found');
    }
    res.send(phone);
  });
});

// Serve the client's index.html for all other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
