const Phones = require('../data/phones.json')

module.exports.list = (req, res, next) => res.json(Phones)