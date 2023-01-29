import * as express from 'express';
import { ClientControllers } from '../controllers/clientController';
export const clientRouter = express.Router();

const clientController = new ClientControllers()

clientRouter.post('/register', clientController.createClient);
clientRouter.post('/login', clientController.loginClient);

