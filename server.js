const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/phones', (req, res) => {
    fs.readFile('./data/phones.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed: ", err);
            return;
        }
        res.send(JSON.parse(jsonString));
    })
});

app.get('/phones/:id', (req, res) => {
    fs.readFile('./data/phones.json', 'utf8', (err, jsonString) => {
        if(err) {
            console.log("File read failed: ", err);
            return;
        }
        const phones = JSON.parse(jsonString);
        const phone = phones.find(phone => phone.id == req.params.id);
        res.send(phone);
    })
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));