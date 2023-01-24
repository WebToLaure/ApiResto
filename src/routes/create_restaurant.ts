import * as express from 'express';
import { Restaurant } from '../entities/restaurant';
const router = express.Router();


router.post('/api/restaurant', async (req,res)=>{ // creer un objet pour l'utilisateur
    const {
        name,
        password

    } = req.body;

    const restaurant = Restaurant.create({  // faire en sorte que l'objet concorde avec les instances de l'entité (nom database-nom utilisateur)
   
     

    });

await restaurant.save ();  //sauvergarde pour database

return res.json(restaurant);

});
export { 
    router as createRestaurantRouter
}