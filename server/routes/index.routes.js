const PhoneRoutes = require("./Phone.routes")

/* GET home page */
router.get("/", (req, res, next) => {
    res.json("Phone Cave");
  });
  
  router.use("/auth", authRoutes);
  
  module.exports = router;