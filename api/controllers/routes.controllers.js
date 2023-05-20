const getPhones = require("../services/getPhones");

module.exports.listPhones = async (req, res, next) => {
  try {
    const phones = await getPhones();

    res.json(phones);
  } catch (error) {
    next(error);
  }
};

module.exports.detailPhone = async (req, res, next) => {
  try {
    const phones = await getPhones();
    const phoneId = parseInt(req.params.id);

    const phoneDetail = phones.find((phone) => phone.id === phoneId);

    res.json(phoneDetail);
  } catch (error) {
    next(error);
  }
};
