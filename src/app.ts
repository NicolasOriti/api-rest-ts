import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import db from './config/mongo';
import apiRouter from './routes/index';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);

db()
  .then(() => console.log('DB is connected'))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
