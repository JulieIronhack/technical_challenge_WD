const express = require('express');
const PORT = process.env.PORT || 5005;
const app = express();
app.use(express.json());
const phone_cave = require('../phones.json');

app.get("/telephones", (req, res) => {
    try {
        res.send(phone_cave);
    }
    catch (err) {
        console.error(err);
    }
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
   })