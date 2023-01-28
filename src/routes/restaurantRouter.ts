import * as express from 'express';
import { RestaurantControllers } from '../controllers/restaurantController';
import { authenticateJWT } from '../middleware/auth';
import { isAdmin } from '../middleware/isAdmin';


export const restaurantRouter = express.Router();

const restaurantControllers = new RestaurantControllers()





restaurantRouter.post('/register', authenticateJWT, isAdmin, restaurantControllers.createRestaurant);
restaurantRouter.get('/', restaurantControllers.getAllRestaurant);
restaurantRouter.get('/:id', restaurantControllers.getRestaurantById);
restaurantRouter.put('/:id', authenticateJWT, isAdmin, restaurantControllers.updateRestaurant);
restaurantRouter.delete('/:id', authenticateJWT, isAdmin, restaurantControllers.deleteRestaurant);


