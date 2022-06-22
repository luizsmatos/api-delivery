import { Router } from 'express';
import { CreateDeliveryController } from '../modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAllAvailableController } from '../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman';

const routesDeliveries = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();

routesDeliveries.post(
  '/',
  ensureAuthenticateClient,
  createDeliveryController.handle,
);

routesDeliveries.get(
  '/available',
  ensureAuthenticateDeliveryman,
  findAllAvailableController.handle,
);

export { routesDeliveries };
