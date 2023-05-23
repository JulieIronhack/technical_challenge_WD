const data = require('../data/phones.json');
const createError = require('http-errors');

module.exports.list = async (req, res, next) => {
  if (data) {
    const phones = data.map((phone) => {
      phone.imageUrl = `${process.env.API_URL}/assets/images/${phone.imageFileName}`
      return phone;
    })
    res.json(phones)
  } else {
    next(createError(404, `Phones data not found`))
  }
};

module.exports.detail = (req, res, next) => {
  const phoneId = req.params.id;
  const phone = data.find((phone) => phone.id == id)

  if (phone) {
    phone.imageUrl = `${process.env.API_URL}/assets/images/${phone.imageFileName}`
    res.json(phone)
  } else {
    next(createError(404, 'Phone not found'))
  }

};