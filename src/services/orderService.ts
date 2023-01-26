import { Order } from "../entities/order";
import { Restaurant } from "../entities/restaurant";
import { Menu } from "../entities/menu";
import { Client } from "../entities/client";


//GET POST UPDATE DELETE
export class OrderService {


    async addOrder(clientId : number, menuId :  number, restaurantId : number): Promise<Order | undefined> {
        {

            const newOrder = new Order();

            const client = await Client.findOneBy ({id : clientId});
            const menu = await Menu.findOneBy ({ id :menuId});
            const restaurant = await Restaurant.findOneBy ({ id:restaurantId });
    

            //const order = 

            if ( client && menu && restaurant) {

                newOrder.client = client;
                newOrder.menu = menu;
                newOrder.restaurant = restaurant;

                await newOrder.save();

                return newOrder ;

            }

            return undefined;
        }

    }






       /*    async getOrderById(id:number) {
     
             const order = await Order.findOneBy({ id: 1 });
     
             return res.json(order);
      */
       // } 
}