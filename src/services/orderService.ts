


import { Order } from "../entities/order";

//GET POST UPDATE DELETE

async function addOrder(req: any, res: any){

    const order = await Order.create({})

}
 async function getOrderById(req: any, res: any){

    const order = await Order.findOneBy({id : 1});

    return res.json(order);

}