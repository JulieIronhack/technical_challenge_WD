const express = require('express');
const data = require('../data/phones.json');
const router = new express.Router();
const fetch = require('node-fetch');
let setting = { method: 'GET' };
const fs = require('fs');

router.get('/', (req, res, next) => {
  fetch(data, setting).then((res) => res.json()).then;
  res.json({ data });
  console.log(data);
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  data
    .findById(id)
    .then((phone) => {
      res.json({ phone });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
