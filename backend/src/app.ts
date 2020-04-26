import express, { json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
require('dotenv').config();

import routes from './routes';

const app = express();

mongoose
   .connect(<string>process.env.MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => console.log('Connected'))
   .catch((err: Error) => console.log('Error', err.stack));

app.use(cors());
app.use(json());
app.use(routes);

export default app;
