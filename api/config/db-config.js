const mongoose = require("mongoose")

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/the-phone-cave"


mongoose
    .connect(MONGODB_URI)
    .then(() => console.info("Connected to DB"))
    .catch(() => console.error("Error DB", error))


