import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import boardRoutes from './routes/board.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/board', boardRoutes);

app.get('/', (req, res) => {
    res.send('<h1><mark>Welcome to the leaderbirds API.</mark></h1>')
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`<<<---SERVER RUNNING ON PORT ${PORT}!--->>>`)))
    .catch((error) => console.log(error));

mongoose.set('useFindAndModify', false);