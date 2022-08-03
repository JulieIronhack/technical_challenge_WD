
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = require("./routes")
app.use("/phones",routes)

app.get("/",(req,res)=>res.send("Welcome to my Express App"))

module.exports = app;
