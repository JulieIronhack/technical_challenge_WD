const router = require("express").Router();
const cellData = require("../phones.json")


router.get(("/phones"), (req, res) =>{
    console.log("Phone List Requested!")
    res.json(cellData); 
})

router.get(("/phones/:id"), (req, res) =>{
    console.log("Requesting Phone")
    const {id} = req.params;
    const filteredData = cellData.filter(cell => cell.id == id );
    console.log("Phone Requested", filteredData)
    res.json(filteredData[0])

})

module.exports = router;
