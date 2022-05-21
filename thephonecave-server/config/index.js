const express = require("express");
const cors = require("cors");

module.exports = (app) => {
 app.use(
    cors({
      credentials: true,
      origin: process.env.ORIGIN || "http://localhost:3000",
    })
  );
};