const router = require('express').Router();

const Phone = require('../models/Phone.model');

router.post('/phones', async (req, res) => {
  try {
    const result = await Phone.insertMany(req.body);
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: 'Action failed.' });
  }
});

router.get('/phones', async (req, res) => {
  try {
    const result = await Phone.find();
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: 'Action failed.' });
  }
});

router.get('/phones/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Phone.findOne({ _id: id });

    if (!result) {
      return res.status(404).json({ msg: 'Phone not found' });
    }
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: 'Action failed.' });
  }
});

module.exports = router;
