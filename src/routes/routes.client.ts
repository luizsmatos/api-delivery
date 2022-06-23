import { Router } from 'express';

import { FindAllDeliveriesController } from './../modules/clients/useCases/findAllDeliveries/FindAllDeliveriesController';
import { AuthenticateClientController } from '../modules/account/authenticateClient/AuthenticateClientController';
import { CreateClientController } from '../modules/clients/useCases/createClient/CreateClientController';
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';

const routesClient = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const findAllDeliveriesController = new FindAllDeliveriesController();

routesClient.post('/', createClientController.handle);
routesClient.post('/authenticate', authenticateClientController.handle);
routesClient.get(
  '/deliveries',
  ensureAuthenticateClient,
  findAllDeliveriesController.handle,
);

export { routesClient };
