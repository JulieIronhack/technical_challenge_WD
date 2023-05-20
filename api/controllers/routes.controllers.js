const getPhones = require("../services/getPhones");

module.exports.listPhones = async (req, res, next) => {
  try {
    const phones = await getPhones();

    res.json(phones);
  } catch (error) {
    next(error);
  }
};
