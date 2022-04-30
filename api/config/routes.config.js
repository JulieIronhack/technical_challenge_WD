const createError = require("http-errors");
const express = require("express");
const router = express.Router();
const telephones = require("../controllers/telephones.controller");

router.get("/telephones", telephones.list);

router.use((req, res, next) => next(createError(404, "Route not found")));

module.exports = router;