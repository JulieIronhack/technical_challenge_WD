const express = require("express");
const logger = require("morgan");

const app = express();

app.use(express.json());
app.use(logger("dev"));

app.use("/api/v1", require("./config/routes.config"));

// Errors Middleware
app.use(require("./middleware/error.mid"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.info(`Server is running on port: ${PORT}`));
