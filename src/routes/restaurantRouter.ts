import * as express from 'express';

import { RestaurantControllers } from '../controllers/restaurantController';
const restaurantControllers = new RestaurantControllers()

export const restaurantRouter = express.Router();

restaurantRouter.post('/register', restaurantControllers.createRestaurant);
restaurantRouter.get('/', restaurantControllers.getAllRestaurant);
restaurantRouter.get('/:id', restaurantControllers.getRestaurantById);
restaurantRouter.put('/:id', restaurantControllers.updateRestaurant);

