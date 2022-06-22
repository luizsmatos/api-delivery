import { Router } from 'express';
import { CreateDeliveryController } from '../modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAllAvailableController } from '../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';

const routesDeliveries = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();

routesDeliveries.post(
  '/',
  ensureAuthenticateClient,
  createDeliveryController.handle,
);

routesDeliveries.get('/available', findAllAvailableController.handle);

export { routesDeliveries };
