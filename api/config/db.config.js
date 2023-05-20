const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/phone-cave'

mongoose.connect(MONGODB_URI)
.then(() => console.info(`Successfully connect to the database ${MONGODB_URI}`))
.catch((error) => console.error('An error ocurred trying to connect to the database', error))