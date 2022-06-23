import { Router } from 'express';

import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman';
import { CreateDeliveryController } from '../modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAllAvailableController } from '../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { UpdateDeliverymanController } from './../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';
import { UpdateStatusDeliveryController } from '../modules/deliveries/useCases/updateStatusDelivery/UpdateStatusDeliveryController';

const routesDeliveries = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const updateStatusDeliveryController = new UpdateStatusDeliveryController();

routesDeliveries.put(
  '/updateDeliveryman/:id',
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle,
);

routesDeliveries.put(
  '/updateStatus/:id',
  ensureAuthenticateDeliveryman,
  updateStatusDeliveryController.handle,
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
