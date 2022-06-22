import { Router } from 'express';
import { AuthenticateClientController } from '../modules/account/authenticateClient/AuthenticateClientController';
import { CreateClientController } from '../modules/clients/useCases/createClient/CreateClientController';

const routesClient = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

routesClient.post('/', createClientController.handle);
routesClient.post('/authenticate', authenticateClientController.handle);

export { routesClient };
