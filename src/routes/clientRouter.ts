import * as express from 'express';
import { ClientControllers } from '../controllers/clientController';

/**
 * @constant clientRouter
 * 
 * Cette constante permet de : 
 * * Gérer les routes http suivant la méthode souhaitée et le contrôleur utlisé.
 * * De donnée via cette route la possibilité d'y incorporer un droit d'accès à la méthode par une authentification et ses droits qui y sont liés.
 */

export const clientRouter = express.Router();

const clientController = new ClientControllers()

clientRouter.post('/register', clientController.createClient);
clientRouter.post('/login', clientController.loginClient);

