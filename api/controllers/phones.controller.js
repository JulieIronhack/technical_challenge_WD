const data = require('../data/phones.json');
const createError = require('http-errors');

module.exports.list = async (req, res, next) => {
  try {
    const phones = await res.json({data: phones});
  } catch(error) {
    next(error)
  }
};

module.exports.detail = (req, res, next) => {
  const id = req.params.id;
  
  const phone = data.find((phone) => phone.id == id)

  if (!phone) {
    next(createError(404, 'Phone not found'))
  }

};