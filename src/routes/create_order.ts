import * as express from 'express';
import { Order } from '../entities/order';
const router = express.Router();



router.post('/api/order', async (req, res) => { // creer un objet pour l'utilisateur
    const {

        id,
        create_at


    } = req.body;

    const order = Order.create({  // faire en sorte que l'objet concorde avec les instances de l'entité (nom database-nom utilisateur)


    });

    await order.save();  //sauvergarde pour database

    return res.json(order);


});

export {

    router as createOrderRouter
}