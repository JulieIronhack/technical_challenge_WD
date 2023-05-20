const Phone = require('../models/phone.model');


module.exports.list = (req, res, next) => {
  Phone.find()
    .then((phones) => res.json(phones))
    .catch(next);
};

module.exports.detail = (req, res, next) => res.json(phones);