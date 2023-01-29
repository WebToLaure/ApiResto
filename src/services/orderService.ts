import { Order } from "../entities/order";
import { Restaurant } from "../entities/restaurant";
import { Menu } from "../entities/menu";
import { Client } from "../entities/client";

/**
 * @class OrderService
 * 
 * Une class permettant :
 * * De générer des requêtes SQL précise à une demande spécifique.
 * * Celle-ci est liée uniquement à des requêtes CREATE, GET ALL / By Id, UPDATE et DELETE pour la partie order (commande).
 */
export class OrderService {

    /** 
     * @method addOrder :
     * * Method avec requête SQL permettant de créer une nouvelle commande (order), avec les parmaètres d'un client, d'un menu et d'un restaurant spécifique.  
     */
    async addOrder(clientId: number, menuId: number, restaurantId: number): Promise<Order | undefined> {

        const newOrder = new Order();

        const client = await Client.findOneBy({ id: clientId });
        const menu = await Menu.findOneBy({ id: menuId });
        const restaurant = await Restaurant.findOneBy({ id: restaurantId });

        if (client && menu && restaurant) {

            newOrder.client = client;
            newOrder.menu = menu;
            newOrder.restaurant = restaurant;

            await newOrder.save();

            return newOrder;
        }

        return undefined;
    }

    /** 
     * @method getAllOrders :
     * * Method avec requête SQL permettant de récupérer toutes les commandes existantes. Un paramètre de relations est activé pour pouvoir retourner un contenu supplémentaire (menu, resto). 
     */
    async getAllOrders(): Promise<Order[] | undefined> {

        const orders = await Order.find({
            relations: {
                menu: true,
                restaurant: true
            }
        });

        if (orders !== null) {
            return orders;
        }
        return undefined;
    }

    /** 
     * @method getOrderById :
     * * Method avec requête SQL permettant de récupérer une commande existante via son id comme paramètre. 
     */
    async getOrderById(id: number): Promise<Order | undefined> {

        const order = await Order.findBy({ id });

        if (order) {

            return order[0];
        }
        return undefined;

    }

    /** 
     * @method updateOrder :
     * * Method avec requête SQL permettant de modifier une commande en changeant soit de menu, soit de restaurant. 
     */
    async updateOrder(orderId: number, menuId: number, restaurantId: number): Promise<Order | undefined> {


        const order = await Order.findOneBy({ id: orderId });
        const menu = await Menu.findOneBy({ id: menuId });
        const restaurant = await Restaurant.findOneBy({ id: restaurantId });

        if (order && menu && restaurant) {

            order.menu = menu;
            order.restaurant = restaurant;

            await order.save();

            return order;

        }

        return undefined;

    }

    /** 
     * @method deleteOrder :
     * * Method avec requête SQL permettant de supprimer une commande via son id comme paramètre. 
     */
    async deleteOrder(id: number): Promise<Order | undefined> {

        const order = await Order.findOneBy({ id });

        if (order) {

            return order?.remove();
        }
        return undefined;
    }
}