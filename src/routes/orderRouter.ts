import * as express from 'express';
import { OrderController } from '../controllers/orderController';
import { authenticateJWT } from '../middleware/auth';

/**
 * @constant orderRouter
 * 
 * Cette constante permet de : 
 * * Gérer les routes http suivant la méthode souhaitée et le contrôleur utlisé.
 * * De donnée via cette route la possibilité d'y incorporer un droit d'accès à la méthode par une authentification et ses droits qui y sont liés.
 */
export const orderRouter = express.Router();

const orderController = new OrderController();

orderRouter.post('/', authenticateJWT, orderController.addOrder);
orderRouter.get('/', authenticateJWT, orderController.getOrders);
orderRouter.get('/:id', authenticateJWT, orderController.getOrderById);
orderRouter.put('/:id', authenticateJWT, orderController.updateOrder);
orderRouter.delete('/:id', authenticateJWT, orderController.deleteOrder);




