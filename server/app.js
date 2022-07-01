const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

const phoneRouter = require('./routes/phone.route');

app.use('/', phoneRouter);

const connectToDB = require('./config/db.config');

connectToDB().then(() => {
  app.listen(4000, () => console.log('Server running on port ', 4000));
});
