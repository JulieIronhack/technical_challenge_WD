const phones = require('../data/phones.json');
const createError = require('http-errors');

dule.exports.list = (req, res, next) => {
  if (phones) {
    console.log('phones data ', phones);
    res.json(phones);
  } else {
    next(createError(404, `Phones data not found`));
  }
};

module.exports.detail = (req, res, next) => {
  const phoneId = req.params.id;
  const phoneDetail = phones.find(phone => phone.id == phoneId);
  if (phoneDetail) {
    phoneDetail.imageFileName = `${process.env.API_URL}/assets/images/${phoneDetail.imageFileName}`;
    res.json(phoneDetail);
  } else {
    next(createError(404, `Phone not found`));
  }
};