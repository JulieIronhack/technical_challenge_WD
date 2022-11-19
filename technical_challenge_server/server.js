// load up the express framework and body-parser helper
const express = require('express');
const bodyParser = require('body-parser');
const logger = require("morgan");
const cookieParser = require("cookie-parser");
// create an instance of express to serve our end points
const app = express();
const cors = require("cors");

// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files
const fs = require('fs');

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(cors())
// app.use(function (req, res, next) {
//   //Enabling CORS
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
//   next();
// });



const FRONTEND_URL = process.env.ORIGIN || "http://localhost:3000";

// this is where we'll handle our various routes from
const routes = require('./routes/routes.js')(app, fs);

// Middleware configuration

app.set("trust proxy", 1);

// controls a very specific header to pass headers from the frontend
// app.use(
//   cors({
//     origin: [FRONTEND_URL],
//   })
// );



// In development environment the app logs
app.use(logger("dev"));

// To have access to `body` property in the request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// finally, launch our server on port 3001.
const server = app.listen(5005, () => {
  console.log('listening on port %s...', server.address().port);
});