const fs = require("fs");
const path = require("path");

exports.getAllPhones = (req, res, next) => {
  let raw = fs.readFileSync(path.join(__dirname, "..", "data", "phones.json"));
  let phones = JSON.parse(raw);

  res.status(200).json({
    status: "success",
    data: phones,
  });
};

exports.getPhoneById = (req, res, next) => {
  let raw = fs.readFileSync(path.join(__dirname, "..", "data", "phones.json"));
  let phones = JSON.parse(raw);
  let queryResult = phones.filter((el) => el.id === +req.params.id);

  res.status(200).json({
    status: "success",
    results: queryResult.length,
    data: queryResult,
  });
};
