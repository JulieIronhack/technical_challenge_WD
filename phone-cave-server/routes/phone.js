const express = require('express');
const data = require('../../data/phones.json');
const router = new express.Router();

router.get('/phones', (req, res, next) => {
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
