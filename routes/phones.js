const userRoutes = (app, fs) => {
  const phonesData = "./data/phones.json";

  app.get("/telephones", (req, res) => {
    fs.readFile(phonesData, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });
};

module.exports = userRoutes;
