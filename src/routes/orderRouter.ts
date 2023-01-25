import * as express from 'express';
import { Order } from '../entities/order';
import { AppDataSource } from '../module/clientData';
const router = express.Router();



router.post('/api/order', async (req, res) => { // creer un objet pour l'utilisateur
    const {

        id,
        create_at


    } = req.body;




    });

    


export {

    router as createOrderRouter
}