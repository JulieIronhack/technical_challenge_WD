const phones = require('../data/phones');

module.exports.list = (req, res, next) => res.send(phones);


