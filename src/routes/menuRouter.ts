import * as express from 'express';
import { authenticateJWT } from '../middleware/auth';
import { MenuControllers } from '../controllers/menuController';
//import { isAdmin } from '../middleware/isAdmin';

/**
 * @constant menuRouter
 * 
 * Cette constante permet de : 
 * * Gérer les routes http suivant la méthode souhaitée et le contrôleur utlisé.
 * * De donnée via cette route la possibilité d'y incorporer un droit d'accès à la méthode par une authentification et ses droits qui y sont liés.
 */

export const menuRouter = express.Router();

const menusController = new MenuControllers();

//Routes

menuRouter.post('/',/*authenticateJWT, isAdmin,*/  menusController.CreateMenu);

menuRouter.get('/', menusController.getAllMenus);

menuRouter.get('/:id', menusController.getOneMenu)

menuRouter.put('/:id', /*authenticateJWT, isAdmin,*/  menusController.updateMenu)

menuRouter.delete('/:id',/* authenticateJWT,/*isAdmin,*/   menusController.deleteMenu)

