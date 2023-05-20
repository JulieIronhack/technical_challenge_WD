const data = require("../data/phones.json");

module.exports.list = (req, res, next) => {
  try {
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports.detail = (req, res, next) => {
  const { id } = req.params;

  try {
    const onePhone = data.find((phone) => phone.id === parseInt(id));
    console.log(onePhone);
    res.json(onePhone);
  } catch (error) {
    next(error);
  }
};
