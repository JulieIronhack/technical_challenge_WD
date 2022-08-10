    const router = require("express").Router();

    router.get("/", (req, res, next) => {
    res.json("All good!");
    });

    const phoneRoutes = require("./phone.routes.js")
    router.use("/phones", phoneRoutes)

    module.exports = router;