const { connect } = require("mongoose");

module.exports = async () => {
    try {
        const { connections } = await connect(process.env.MONGODB_URI);
        console.log(`Connected to the database: ${connections[0].name}`);
    } catch (error) {console.error("Error while connecting to the databse", error)};
};