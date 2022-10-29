// const { Product, Menu } = require("../models");
const phoneData = require('../data/phones.json')

module.exports.list = (req, res, next) => {

  const PhoneList = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(phoneData);
    }, 300);
  });


  PhoneList.then((restaurant) => res.json(restaurant))
    .catch((error) => next(error));
  }


module.exports.detail = (req, res, next) => {

  const PhoneList = (id) =>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const phoneDetail = phoneData.filter((phones)=> phones.id === parseInt(id))
        if (phoneDetail.length === 1){
          resolve(phoneDetail);
        } else {
          return reject()
        }
      }, 300);
    })
  }

  PhoneList(req.params.id)
  .then((product) => res.json(product))
  .catch((error) => next(error));
};
