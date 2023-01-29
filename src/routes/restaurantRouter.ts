import * as express from 'express';
import { RestaurantControllers } from '../controllers/restaurantController';
import { authenticateJWT } from '../middleware/auth';
//import { isAdmin } from '../middleware/isAdmin';

/**
 * @constant restaurantRouter
 * 
 * Cette constante permet de : 
 * * Gérer les routes http suivant la méthode souhaitée et le contrôleur utlisé.
 * * De donnée via cette route la possibilité d'y incorporer un droit d'accès à la méthode par une authentification et ses droits qui y sont liés.
 */
export const restaurantRouter = express.Router();

const restaurantControllers = new RestaurantControllers()

restaurantRouter.post('/register',/* authenticateJWT, isAdmin,*/ restaurantControllers.createRestaurant);
restaurantRouter.get('/', restaurantControllers.getAllRestaurant);
restaurantRouter.get('/:id', restaurantControllers.getRestaurantById);
restaurantRouter.put('/:id',/* authenticateJWT, isAdmin,*/ restaurantControllers.updateRestaurant);
restaurantRouter.delete('/:id', /*authenticateJWT, isAdmin,*/ restaurantControllers.deleteRestaurant);


