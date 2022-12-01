const router = require("express").Router();
const phoneList = require("../data/phones.json");

// GET "/api/phones" => get all phones list to show in client react app
router.get("/", (req, res, next) => {
  if (!phoneList) {
    res
      .status(500)
      .json({
        errorMessage: "there was an error trying to get the phone list",
      });
    return;
  }
  res.status(200).json(phoneList);
});

// GET "/api/phones" => get all phones list to show in client react app
router.get("/:phoneId", (req, res, next) => {
  const { phoneId } = req.params;
  const details = phoneList.find((eachPhone) => (eachPhone.id = phoneId));

  if (!details) {
    res
      .status(500)
      .json({
        errorMessage: "there was an error trying to get the phone details",
      });
    return;
  }

  res.status(200).json(details);
});

module.exports = router;
