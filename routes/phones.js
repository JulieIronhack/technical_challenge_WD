const phonesRoutes = (app, fs) => {
    // variables
    const dataPath = './data/phones.json';
  
    // READ
    app.get('/phones', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  console.log(data);
        res.send(JSON.parse(data));
      });
    });

    app.get('/phones/:id', (req, res) => {
        const { id } = req.params;
        fs.readFile(dataPath, 'utf8', (err, data) => {
          if (err) {
            throw err;
          }
    
          res.send(JSON.parse(data));
        });
      });

  };
  
  module.exports = phonesRoutes;