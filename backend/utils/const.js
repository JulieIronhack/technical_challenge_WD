const MONGO_URI =
process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/backend";

module.exports =  MONGO_URI