const router = require("express").Router();
const data = require("../data/phones.json");

router.get("/", (req, res, next) => {
  res.json(data);
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  const phone = data.filter((phone) => {
    return +phone.id === +id;
  });
  if (phone.length) {
    res.json(phone[0]);
  } else {
    res.json({ message: "The id doesn't match to any phone" });
  }
});

module.exports = router;
