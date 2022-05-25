const app = require("express").Router()
const phone_cave = require("./phones.json")
 
app.get('/telephones', (req, res, next) => {
    try {
        return console.log(phone_cave)
    } catch (err) {
        console.log(err)
    }
});
// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));

module.exports = app; 