const data = require("../data/phones.json");

module.exports.getPhones = (req, res, next) => {
  res.status(200).json(data);
}

module.exports.getPhone = (req, res, next) => {
  const { id } = req.params;
  const phone = data.filter(tlf => tlf.id === parseInt(id));
  res.status(200).json(phone);
}