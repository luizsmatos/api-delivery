import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';

import { routesClient, routesDeliveries, routesDeliveryman } from './routes';
import error from './middlewares/error';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/client', routesClient);
app.use('/deliveryman', routesDeliveryman);
app.use('/delivery', routesDeliveries);

app.use(error);

app.listen(3000, () => {
  console.log('Server is running!');
});
