const express = require('express');
require('dotenv').config();
const dbConnection = require('./config/dbConnection');
const authRouter = require('./routes/auth.route');

const app = express();
dbConnection();
app.use(express.json());
app.use(authRouter);

const PORT = process.env.PORT || 3001;


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})