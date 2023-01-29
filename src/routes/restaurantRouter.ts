import * as express from 'express';
import { RestaurantControllers } from '../controllers/restaurantController';



export const restaurantRouter = express.Router();

const restaurantControllers = new RestaurantControllers()

restaurantRouter.post('/register',restaurantControllers.createRestaurant);

restaurantRouter.get('/', restaurantControllers.getAllRestaurant);

restaurantRouter.get('/:id', restaurantControllers.getRestaurantById);

restaurantRouter.put('/:id', restaurantControllers.updateRestaurant);

restaurantRouter.delete('/:id',  restaurantControllers.deleteRestaurant);


