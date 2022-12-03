const phoneRouter = require("express").Router();
const phones = require("../db/phones.json");

// GET /phones => show all phones
phoneRouter.get("/phones", (req, res) => {
  res.json(phones); // return an array of phone objects
});

// GET /phone/:phoneId => show a phone details
phoneRouter.get("/phone/:id", (req, res) => {
  const phoneId = req.params.id;
  const phone = phones.filter(
    (phone) => Number(phone.id) === Number(phoneId)
  )[0];
  res.json(phone); // return an object of the phoneId
});

module.exports = phoneRouter;
