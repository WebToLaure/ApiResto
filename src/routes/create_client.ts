import * as express from 'express';
import { Client } from '../entities/client';
const router = express.Router();
import { AppDataSource } from '../module/clientData';


router.post('/api/client', async (req,res)=>{ // creer un objet pour l'utilisateur
    const {
        name,
        password

    } = req.body;

    const client = Client.create({  
        surname :  name,            // faire en sorte que l'objet concorde avec les instances de l'entité (nom database-nom utilisateur)
        password : password 

    });

await client.save ();  //sauvergarde pour database

return res.json(client);

});

export { 
    router as createClientRouter
}