import { AuthenticateClientController } from './modules/account/authenticateUser/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { Router } from 'express';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientUser = new AuthenticateClientController();

routes.post('/client/', createClientController.handle);
routes.post('/authenticate', authenticateClientUser.handle);

export { routes };
