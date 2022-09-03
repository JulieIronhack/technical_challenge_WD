const express = require("express");
const router = express.Router();
const Phone = require("../models/Phone.model");

router.get("/", async (req, res, next) => {
    try {
          const phones = await Phone.find()
          return res.status(200).json(phones)
      } catch (error) {
          next(error)
      }
  });

module.exports = router