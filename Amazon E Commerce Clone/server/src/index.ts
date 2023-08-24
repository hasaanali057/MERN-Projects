// express module import
import express  from 'express';

// importing dotenv
import dotenv from 'dotenv';

// Import Routes for Auth Model
import {
  authRouter
} from './modules/auth/Routes';

import{
  ProductRouter
} from './modules/product/Routes';

// DataBase connection
import dbConnection from './config/DBConnection';

// importing CORS
import cors from 'cors';

// Importing Winston Logger
import Logger from './Utils/Debugger';

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true }));

// Go to Auth Router if requested
app.use('/auth', authRouter);

// Go to Product ROuter If Requested
app.use('/product', ProductRouter);

app.listen(process.env.PORT, () => {
  Logger.info('Server is listening at ' + process.env.PORT);
});

dbConnection();

module.exports = app;
