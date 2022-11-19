const phonesRoutes = require('./phones');
const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
      });
    
      // run our user route module here to complete the wire up
      phonesRoutes(app, fs);
};

module.exports = appRouter;