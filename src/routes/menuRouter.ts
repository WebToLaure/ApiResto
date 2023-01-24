import * as express from 'express';
import { Menu } from '../entities/menu';
const router = express.Router();
import { AppDataSource } from '../module/clientData';

router.post('/api/menu', async (req, res) => { // creer un objet pour l'utilisateur
    const {


    } = req.body;


  
});
export {
    router as createMenuRouter
}