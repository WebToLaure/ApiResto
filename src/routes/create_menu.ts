import * as express from 'express';
import { Menu } from '../entities/menus';
const router = express.Router();

router.post('/api/menu', async (req, res) => { // creer un objet pour l'utilisateur
    const {

        
    } = req.body;

    const menu = Menu.create({  // faire en sorte que l'objet concorde avec les instances de l'entité (nom database-nom utilisateur)


    });

    await menu.save();  //sauvergarde pour database

    return res.json(menu);

});
export {
    router as createMenuRouter
}