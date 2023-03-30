const router = require("express").Router();
const data = require("../resources/data.json");

//GET "/api/phones" => Show all phones
router.get("/", (req, res, next) => {
  try {
    // const response
    const phones = data.map((phone) => ({ name: phone.name, id: phone.id }));
    res.json(phones);
  } catch (error) {
    next(error);
  }
});

//GET "/api/phones/:id" => Show a phone's details
router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  try {
    const singlePhone = data.find((phone) => phone.id === Number(id));
    res.json(singlePhone);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
