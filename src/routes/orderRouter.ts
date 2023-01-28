import * as express from 'express';
import { OrderController } from '../controllers/orderController';
import { authenticateJWT } from '../middleware/auth';


export const orderRouter = express.Router();

const orderController = new OrderController();

orderRouter.post('/', authenticateJWT, orderController.addOrder);
orderRouter.get('/', authenticateJWT, orderController.getOrders);
orderRouter.get('/:id', authenticateJWT, orderController.getOrderById);
orderRouter.put('/:id', authenticateJWT, orderController.updateOrder);
orderRouter.delete('/:id', authenticateJWT, orderController.deleteOrder);




