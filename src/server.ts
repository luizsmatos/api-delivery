import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';

import { routes } from './routes';
import error from './middlewares/error';

dotenv.config();
const app = express();

app.use(express.json());
app.use(routes);

app.use(error);

app.listen(3000, () => {
  console.log('Server is running!');
});
