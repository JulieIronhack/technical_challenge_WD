//const router = require("express").Router();

const express = require('express')
const app = express();

app.get('/', (req, res, next) => {
    res.send('Homepage OK')
    console.log('Homepage OK')
})


app.listen(3000);

//module.exports = router;