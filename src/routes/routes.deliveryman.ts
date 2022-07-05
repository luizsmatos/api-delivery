import { Router } from 'express';
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman';
import { AuthenticateDeliverymanController } from '../modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliverymanController } from '../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { FindAllDeliveriesDeliverymanController } from '../modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController';

const routesDeliveryman = Router();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const findAllDeliveriesDeliverymanController =
  new FindAllDeliveriesDeliverymanController();

routesDeliveryman.post('/', createDeliverymanController.handle);
routesDeliveryman.post(
  '/authenticate',
  authenticateDeliverymanController.handle,
);

routesDeliveryman.get(
  '/deliveries',
  ensureAuthenticateDeliveryman,
  findAllDeliveriesDeliverymanController.handle,
);
export { routesDeliveryman };
