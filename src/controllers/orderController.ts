import { OrderService } from "../services/orderService";
import { Request, Response } from "express";
import { authenticateJWT } from "../middleware/auth";
import * as jwt from 'jsonwebtoken';
import { Order } from "../entities/order";
import { Restaurant } from "../entities/restaurant";
import { Menu } from "../entities/menu";
import { Client } from "../entities/client";


const orderService = new OrderService();

export class OrderController {

    async addOrder(req: Request, res: Response) {
        const clientId = req.body.client;
        const restaurantId: number = parseInt(req.body.restaurantId);
        const menuId: number = parseInt(req.body.menuId);
        console.log(menuId, restaurantId);


        if (!menuId || !restaurantId) {
            res.status(404).json({
                status: "FAIL",
                data: undefined,
                message: "requête inexistante"
            })
            return;
        }

        try {

            const data = await orderService.addOrder(clientId, menuId, restaurantId);

            if (data) {

                res.status(201).json({
                    status: "OK",
                    data: data,
                    message: "La commande est enregistrée"
                });
            }
        }
        catch (err) {

            res.status(500).json({
                status: 'Fail',
                data: undefined,
                message: "Erreur de status"
            });
        }

    }


}