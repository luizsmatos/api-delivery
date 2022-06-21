import { Router } from 'express';

import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientUser = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();

routes.post('/authenticate', authenticateClientUser.handle);

routes.post('/client/', createClientController.handle);
routes.post('/deliveryman', createDeliverymanController.handle);

export { routes };
