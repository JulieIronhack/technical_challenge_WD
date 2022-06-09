require("dotenv").config();
const app = require('./app');

const server = app.listen(process.env.PORT, () =>
  console.log(`Server running (${process.env.PORT})`)
);

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  server.close(() => process.exit(1));
});
