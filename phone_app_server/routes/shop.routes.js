const router = require("express").Router();
const allPhones = require("../data/phones.json");

// GET /api/phones - Show all phones
router.get("/phones", (req, res) => {
  try {
    res.status(200).json(allPhones);
  } catch (error) {
    (error) => console.log(error);
  }
});

// GET /api/phones/:id - Show a phone details
router.get("/phones/:id", (req, res) => {
  const { id } = req.params;
  try {
    const [singleItem] = allPhones.filter((phone) => phone.id === Number(id));
    res.status(200).json(singleItem);
  } catch (error) {
    (error) => console.log(error);
  }
  // another approach
  // const phone = Object.keys(allPhones).find((item) => item === req.params.id);
  // res.status(200).json(allPhones[phone]);
});

module.exports = router;
