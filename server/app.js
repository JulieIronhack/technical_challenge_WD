require("dotenv").config();

const connectDb = require("./configs/db.config");
connectDb();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

const corsOptions = {
    origin: process.env.ACCESS_CONTROL_ALLOW_ORIGIN,
    methods: ["GET"]
};

app.use(cors(corsOptions));

app.use("/phones", require("./routes/phone.routes"));

app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}
corsOptions:`, corsOptions));