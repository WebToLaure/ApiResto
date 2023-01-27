import * as express from 'express';
import { MenuControllers } from '../controllers/menuController';
import { isAdmin } from '../middleware/isAdmin';

export const menuRouter = express.Router();

const menusController = new MenuControllers();



//Routes

menuRouter.post('/',/* isAdmin,*/menusController.CreateMenu);

menuRouter.get('/', menusController.getAllMenus);

menuRouter.get('/:id', menusController.getOneMenu)

menuRouter.put('/:id', menusController.updateMenu)

menuRouter.delete('/:id', menusController.deleteMenu)

