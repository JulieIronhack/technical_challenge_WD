require('dotenv').config()

// Handles http requests (express is node js framework)
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const phoneList = require("../data/phones.json");

// 👇 Start handling routes here
app.get("/phones", (req, res, next) => {
  res.status(200).json(phoneList);
});

app.get("/phones/:phoneId", (req, res, next) => {
  const { phoneId } = req.params;
  const [phone] = phoneList.filter((phone) => phone.id === Number(phoneId));
  res.status(200).json(phone);
});

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 5005
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
