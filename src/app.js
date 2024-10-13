const express = require('express');
require('dotenv').config();
const dbConnection = require('./config/dbConnection');

const app = express();
dbConnection();

const PORT = process.env.PORT || 3001;


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})