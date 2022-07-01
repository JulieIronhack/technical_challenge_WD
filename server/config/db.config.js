const mongoose = require('mongoose');

module.exports = async () => {
  try {
    const connection = await mongoose.connect(
      'mongodb://localhost:27017/phones'
    );

    console.log(`Connected to database: ${connection.connections[0].name}`);
  } catch (err) {
    console.error('Connection failed');
    console.error(err);

    process.exit(1);
  }
};
