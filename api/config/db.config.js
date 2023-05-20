const mongoose = require ('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/the-phone-cave';

mongoose.connect(MONGODB_URI)
  .then(() => console.info(`Successfully connect to the database`))
  .catch((error) => console.error('An error ocurred trying to connnect to de database', error) )
  