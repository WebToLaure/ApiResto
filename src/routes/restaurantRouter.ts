import * as express from 'express';
import { RestaurantControllers } from '../controllers/restaurantController';
import { isAdmin } from '../middleware/isAdmin';
import { authenticateJWT } from '../middleware/auth';
const restaurantControllers = new RestaurantControllers()

export const restaurantRouter = express.Router();

restaurantRouter.post('/register',authenticateJWT, isAdmin, restaurantControllers.createRestaurant);
restaurantRouter.get('/', restaurantControllers.getAllRestaurant);
restaurantRouter.get('/:id', restaurantControllers.getRestaurantById);
restaurantRouter.put('/:id', restaurantControllers.updateRestaurant);
restaurantRouter.delete('/:id', restaurantControllers.deleteRestaurant);


