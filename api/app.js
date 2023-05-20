require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`Application is running at port ${port}`));