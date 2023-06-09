const phonesData = require('../../data/phones.json')

module.exports.list = (req, res, next) => {
  res.json(phonesData);
}

module.exports.getPhone = (req, res, next) => {
  const phoneId = parseInt(req.params.id);
  const phone = phonesData.find(phone => phone.id === phoneId);
  if (!phone) {
    res.status(404).json({ error: 'Phone not found' });
  } else {
    res.json(phone);
  }
}
