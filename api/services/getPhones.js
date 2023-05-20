const fs = require("fs");

module.exports = function getPhones() {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/phones.json", "utf8", (error, data) => {
      if (error) reject(error);
      else resolve(JSON.parse(data));
    });
  });
};
