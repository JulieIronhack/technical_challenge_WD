const router = require("express").Router();
const mongoose = require("mongoose");
const  Phones= require("../models/Phones.model");

router.get("/phones", async (req, res) => {
  try {
    const phone = await Phones.find();
    res.json(phone);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const phone = await Phones.findById(id);
    res.json(phone);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;