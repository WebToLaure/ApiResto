import { Order } from "../entities/order";

//GET POST UPDATE DELETE
export class OrdersService {


    async addOrder(id: number, menu_id: number, restaurant_id: number) {
   

    }
    async getOrderById(req: any, res: any) {

        const order = await Order.findOneBy({ id: 1 });

        return res.json(order);

    }
}