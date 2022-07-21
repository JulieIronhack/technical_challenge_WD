'use strict';

const express = require('express');
const router = express.Router();
const data = require('./../data/phones.json');

router.get('/', (req, res, next) => {
  res.json({ data });
});

// router.get('/:id', (req, res, next) => {
//   res.json({});
// });

module.exports = router;
