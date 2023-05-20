const dataPhones = require('../data/phones.json')
const createError = require('http-errors')

module.exports.list = (req, res, next) => {
  if (dataPhones) {
    const phones = dataPhones.map((phone) => {
      phone.imageUrl = `${process.env.API_URL}/assets/images/${phone.imageFileName}`
      return phone
    })
    res.json(phones)
  } else {
    next(createError(404, `Phones data not found`))
  }
}

module.exports.detail = (req, res, next) => {
  const phoneId = req.params.id
  const phoneDetail = dataPhones.find(phone => phone.id == phoneId)
  if (phoneDetail) {
    phoneDetail.imageUrl = `${process.env.API_URL}/assets/images/${phoneDetail.imageFileName}`
    res.json(phoneDetail)
  } else {
    next(createError(404, `Phone not found`))
  }
}