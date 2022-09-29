const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;


// enable requests from front 

app.use(
  cors({
    origin: "http://localhost:3000"
  })
)

// access to body in request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const AllRoutes = require("./routes/index.routes")
app.use("/", AllRoutes);

// Port Listens 

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});


module.exports = app;
