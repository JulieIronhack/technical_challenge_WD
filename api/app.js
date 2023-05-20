const express = require('express');
const app = express();


app.use(express.json());
const api = require('./config/routes.config');
app.use('/api/v1', api);

const port = 3001;
app.listen(port, () => console.info(`Application is running at ${port}`)); 