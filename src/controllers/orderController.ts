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
        const clientId = req.body.client.clientId;
        const restaurantId: number = parseInt(req.body.restaurantId);
        const menuId: number = parseInt(req.body.menuId);
        console.log('client', clientId);


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
            console.log(data);

            if (data) {

                res.status(201).json({
                    status: "OK",
                    data: data,
                    message: "La commande est enregistrée"
                });
            }
            else {
                res.status(404).json({
                    status: "FAIL",
                    message: "La commande est introuvable"
                })

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

    async getOrders(req: Request, res: Response) {

        try {
            const orders = await orderService.getAllOrders();

            res.status(200).json({
                status: "OK",
                data: orders,
                message: "LISTE DE VOS COMMANDES"
            });

        } catch (err) {

            res.status(500).json({
                status: "ERROR",
                data: undefined,
                message: "Internal Server Error"
            });
        }


    }

    async getOrderById(req: Request, res: Response) {

        const id: number = parseInt(req.params.id);

        try {
            const order = await orderService.getOrderById(id);

            if (order) {
                res.status(200).json({
                    status: "OK",
                    data: order,
                    message: "VOTRE COMMANDE",
                });

            } else {
                res.status(404).json({
                    status: "NOT FOUND",
                    data: undefined,
                    message: "La commande n'existe pas",
                });
            }

        } catch (err) {
            res.status(500).json({
                status: "ERROR",
                data: undefined,
                message: "Internal Server Error",
            });
        }

    }

    async updateOrder(req: Request, res: Response) {

        const clientId = req.body.clientId;
        const orderId : number = parseInt(req.params.id)
        const restaurantId: number = parseInt(req.body.restaurantId);
        const menuId: number = parseInt(req.body.menuId);

        if (!orderId) { 

            res.status(400).json({
                status: 'FAIL',
                data: undefined,
                message: "Renseignez le champs"
            });
            return
        }

        try {

            if (typeof (orderId) !== 'number') { 

                res.status(400).json({
                    status: 'FAIL',
                    data: undefined,
                    message: "Erreur de structure"
                });
                return
            }
            

            // check Order
            const isOrderExist = await orderService.getOrderById(orderId);

            if (isOrderExist === undefined) {

                res.status(404).json({
                    status: 'FAIL',
                    data: undefined,
                    message: "Le commande n'existe pas"
                });

                return;
            }

            const data = await orderService.updateOrder(orderId, menuId, restaurantId);

            if (data) {

                res.status(200).json({
                    status: 'OK',
                    data: data,
                    message: "Modification ok"
                })
            }
            else {

                res.status(404).json({
                    status: 'FAIL',
                    data: null,
                    message: "Erreur"
                })
            }

        } catch (error) {

            res.status(500).json({
                status: "FAIL",
                data: undefined,
                message: "erreur serveur",
            });
        }
    };

    async deleteOrder(req: Request, res: Response) {

        const clientId = req.body.client.clientId;
        const id: number = parseInt(req.params.id);

        const orderExist = await orderService.getOrderById(id);

        if (!orderExist) {
            res.status(404).json({
                status: "NOT FOUND",
                data: undefined,
                message: "La commande n'existe pas",
            });
            return;
        }
        else if (!clientId) {
            res.status(401).json({
                status: "FAIL",
                data: null,
                message: "Non autorisé"
            });
            return;
        }
        try {
            const data = await orderService.deleteOrder(id);

            if (data) {
                res.status(200).json({
                    status: "OK",
                    data: data,
                    message: "COMMANDE ANNULEE"
                });
            };

        }
        catch (err) {
            res.status(500).json({
                status: "FAIL",
                data: undefined,
                message: "Internal Server Error",
            });
        }

    }


}