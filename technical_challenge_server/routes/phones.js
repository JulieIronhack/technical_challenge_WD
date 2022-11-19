const phonesRoutes = (app, fs) => {
  // variables
  const dataPath = './data/phones.json';

  // READ
  app.get('/phones', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      //res.send(JSON.parse(data));
      res.send(JSON.parse(data));
    });
  });

  app.get('/phones/:id', (req, res) => {
    const { id } = req.params;
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      const phones = JSON.parse(data);
      const phone = phones.filter(data => data.id == id);

      //console.log(id);
      //console.log(phone);
      res.send(phone);
    });
  });

};

module.exports = phonesRoutes;