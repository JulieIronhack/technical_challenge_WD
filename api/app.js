const express = require("express");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use("/api/v1", require("./config/routes.config"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.info(`Server is running on port: ${PORT}`));
