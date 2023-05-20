const fs = require('fs');

module.exports.list = (req, res, next) => {
  const filePath = 'data/phones.json';

  fs.readFile(filePath, 'utf8', (err, data) => {
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  })
};


module.exports.detail = (req, res, next) => {
  const phoneId = req.params.id;

  fs.readFile(filePath, 'utf8', (err, data) => {
    {
      const jsonData = JSON.parse(data);
      const phoneDetail = jsonData.find(elem => elem.id == phoneId);
      res.json(phoneDetail);
    }
  });
};