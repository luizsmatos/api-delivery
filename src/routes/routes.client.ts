import { Router } from 'express';

import { CreateClientController } from '../modules/clients/useCases/createClient/CreateClientController';
import { AuthenticateClientController } from '../modules/account/useCases/authenticateClient/AuthenticateClientController';
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';
import { FindAllDeliveriesClientController } from './../modules/clients/useCases/findAllDeliveries/FindAllDeliveriesClientController';

const routesClient = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const findAllDeliveriesClientController =
  new FindAllDeliveriesClientController();

routesClient.post('/', createClientController.handle);
routesClient.post('/authenticate', authenticateClientController.handle);
routesClient.get(
  '/deliveries',
  ensureAuthenticateClient,
  findAllDeliveriesClientController.handle,
);

export { routesClient };
