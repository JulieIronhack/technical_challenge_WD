const express = require('express');
const app = express();
const cors = require('./config/cors.config')


app.use(cors)
app.use(express.json());
const api = require('./config/routes.config');
app.use('/api/v1', api);

const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`Application is running at ${port}`)); 