const express = require("express");

var fs = require('fs');

var data = fs.readFileSync('phones.json');

var phones = JSON.parse(data);

const cors = require("cors");

module.exports = (app) => {
    app.set("trust proxy", 1);

    app.use(
        cors({
            credentials: true,
            origin: process.env.ORIGIN || "http://localhost:3000",
        })
    );

    app.use(logger("dev"));

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
};