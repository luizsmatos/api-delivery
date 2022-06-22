import { Router } from 'express';

import { UpdateDeliverymanController } from './../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';
import { CreateDeliveryController } from '../modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAllAvailableController } from '../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman';

const routesDeliveries = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();

routesDeliveries.put(
  '/updateDeliveryman/:id',
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle,
);

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
