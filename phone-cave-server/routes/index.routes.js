const router = require("express").Router();

router.use('/phone', require('./phone.routes'))


module.exports = router;
