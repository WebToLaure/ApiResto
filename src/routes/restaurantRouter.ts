import * as express from 'express';
import { RestaurantControllers } from '../controllers/restaurantController';



/**
 * @constant restaurantRouter
 * 
 * Cette constante permet de : 
 * * Gérer les routes http suivant la méthode souhaitée et le contrôleur utlisé.
 * * De donnée via cette route la possibilité d'y incorporer un droit d'accès à la méthode par une authentification et ses droits qui y sont liés.
 */
export const restaurantRouter = express.Router();

const restaurantControllers = new RestaurantControllers()

restaurantRouter.post('/register',restaurantControllers.createRestaurant);

restaurantRouter.get('/', restaurantControllers.getAllRestaurant);

restaurantRouter.get('/:id', restaurantControllers.getRestaurantById);

restaurantRouter.put('/:id', restaurantControllers.updateRestaurant);

restaurantRouter.delete('/:id',  restaurantControllers.deleteRestaurant);


