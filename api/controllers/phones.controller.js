const Phone = require('../models/phone.model');

module.exports.list = (req, res, next) => {
  Phone.find()
  .then((phones) => res.json(phones))
  .catch(next)

}

module.exports.detail = (req, res, next) => {
  Phone.findById(req.params.id)
  .then((phone) => res.json(phone))
  .catch(next)

}