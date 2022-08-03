const router = require("express").Router();
const data = require("../data/phones.json");

router.get("/", (req, res) => {
  res.send(data);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const phone = data.find((phone) => phone.id === id);
  if(!phone) return res.status(404).send({message:"Phone not found"})
  res.status(200).send(phone)
});

module.exports = router;
