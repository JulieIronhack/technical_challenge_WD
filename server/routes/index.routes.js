const mongoose = require('mongoose');
const router = require("express").Router();
const Phone = require('../models/Devices.model');
const phones = require('./../seeds/seeds')

router.get("/create", (req, res, next) => {
  Phone
    .create(phones)
    .then(response => {
      console.log(res.status(202).json(response))
    })
});

router.get("/phones", (req, res, next) => {

  Phone
    .find()
    .then(response => {
      console.log(res.status(202).json(response))
    })
});

router.get("/phones/:id", (req, res, next) => {

  const { id } = req.params

  Phone
    .findById(id)
    .then(response => {
      console.log(res.status(202).json(response))
    })
    .catch(err => {
      res.json('número de identificación del producto(id) no encontrado')
    })
});

module.exports = router;
