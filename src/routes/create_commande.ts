import * as express from 'express';
import { Commande } from '../entities/commandes';
const router = express.Router();



router.post('/api/commande', async (req, res) => { // creer un objet pour l'utilisateur
    const {

        id,
        create_at


    } = req.body;

    const commande = Commande.create({  // faire en sorte que l'objet concorde avec les instances de l'entité (nom database-nom utilisateur)


    });

    await commande.save();  //sauvergarde pour database

    return res.json(commande);


});

export {

    router as createCommandeRouter
}