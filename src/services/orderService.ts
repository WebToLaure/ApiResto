import { Order } from "../entities/order";
import { Restaurant } from "../entities/restaurant";
import { Menu } from "../entities/menu";
import { Client } from "../entities/client";


//GET POST UPDATE DELETE
export class OrderService {


    async addOrder(clientId: number, menuId: number, restaurantId: number): Promise<Order | undefined> {
        

            const newOrder = new Order();

            const client = await Client.findOneBy({ id: clientId });
            const menu = await Menu.findOneBy({ id: menuId });
            const restaurant = await Restaurant.findOneBy({ id: restaurantId });

            console.log(client, menu, restaurant);
            


            if (client && menu && restaurant) {

                newOrder.client = client;
                newOrder.menu = menu;
                newOrder.restaurant = restaurant;

                await newOrder.save();

                return newOrder;

            }

            return undefined;
        

    }

    async getAllOrders(): Promise<Order[] | undefined> {

        const orders = await Order.find();

        if (orders !== null) {
            return orders;
        }
        return undefined;
    }


    async getOrderById(id: number): Promise<Order | null> {

        const order = await Order.findBy({ id });

        if (order) {

            return order[0];
        }
        return null;

    }

    async updateOrder() {

    }

    async deleteOrder(id: number): Promise<Order | undefined> {

        const order = await Order.findOneBy({ id });

        if (order) {

            return order?.remove();
        }
        return undefined;
    }
}