import { Router } from 'express';
import { AuthenticateDeliverymanController } from '../modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliverymanController } from '../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';

const routesDeliveryman = Router();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();

routesDeliveryman.post('/', createDeliverymanController.handle);
routesDeliveryman.post(
  '/authenticate',
  authenticateDeliverymanController.handle,
);

export { routesDeliveryman };
