import express from 'express';
import 'dotenv/config';
import { dbConnection } from './src/config/dbConnection.js';
import {mainRoute} from './src/routes/main.route.js';
import errorHandler from './src/middleware/error.middleware.js';
const app = express();
dbConnection();

app.use(express.json());
app.use( mainRoute);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})