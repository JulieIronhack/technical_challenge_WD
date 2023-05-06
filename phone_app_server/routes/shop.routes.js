const router = require("express").Router();
const allPhones = require("../data/phones.json");

// GET /api/phones - Show all phones
router.get("/phones", (req, res) => {
  try {
    res.json(allPhones);
  } catch (error) {
    (error) => console.log(error);
  }
});

// GET /api/phones/:id - Show a phone details
router.get("/phones/:id", (req, res) => {
  const { id } = req.params;
  try {
    const singleItem = allPhones.find((phone) => phone.id === Number(id));
    res.json(singleItem);
  } catch (error) {
    next(error);
  }
  // anpther approach
  // const phone = Object.keys(allPhones).find((item) => item === req.params.id);
  // res.json(allPhones[phone]);
});

module.exports = router;
