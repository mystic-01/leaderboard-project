import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`<<<---SERVER RUNNING ON PORT ${PORT}!--->>>`)))
    .catch((error) => console.log(error));

mongoose.set('useFindAndModify', false);