import * as express from 'express';
import { Admin } from '../middleware/admin';


import { RestaurantControllers } from '../controllers/restaurantController';
const restaurantControllers = new RestaurantControllers()

export const restaurantRouter = express.Router();

restaurantRouter.post('/register',/* Admin,*/ restaurantControllers.createRestaurant);
restaurantRouter.get('/', restaurantControllers.getAllRestaurant);
restaurantRouter.get('/:id', restaurantControllers.getRestaurantById);
restaurantRouter.put('/:id', restaurantControllers.updateRestaurant);
restaurantRouter.delete('/:id', restaurantControllers.deleteRestaurant);


