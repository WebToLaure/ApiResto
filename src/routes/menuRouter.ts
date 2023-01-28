import * as express from 'express';
import { authenticateJWT } from '../middleware/auth';
import { MenuControllers } from '../controllers/menuController';
//import { isAdmin } from '../middleware/isAdmin';


export const menuRouter = express.Router();

const menusController = new MenuControllers();




//Routes

menuRouter.post('/',/*authenticateJWT, isAdmin,*/  menusController.CreateMenu);

menuRouter.get('/', menusController.getAllMenus);

menuRouter.get('/:id', menusController.getOneMenu)

menuRouter.put('/:id', /*authenticateJWT, isAdmin,*/  menusController.updateMenu)

menuRouter.delete('/:id',/* authenticateJWT,/*isAdmin,*/   menusController.deleteMenu)

