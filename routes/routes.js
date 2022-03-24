const userRoutes = require("./phones");
const phonesRoute = require("./phones");

const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("working!");
  });
  userRoutes(app, fs);
};

module.exports = appRouter;
