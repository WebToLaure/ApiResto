import { OrderService } from "../services/orderService";
import { Request, Response } from "express";


const orderService = new OrderService();

/**@class OrderController
 * 
 * Une class permettant :
 * * De réunir plusieurs méthodes liées à la construction de la partie Order (commande).
 * * De contrôler les informations entrantes, de vérifier que le  protocole soit respecter et renseigné.
 * * Celle-ci est dédiée uniquement à la création, à la récupération, à la mise à jour et à la suppression des commandes.
 */
export class OrderController {

    /** 
     * @method addOrder :
     * 
     * Une méthode permettant de :
     * * Controler les données entrantes, lors de la création d'une commande.
     * * Vérifier et imposer que les contraintes soient bien respectées (le client, le restaurant, le menu etc ...)
     * * Renvoyer un message d'avertissement en cas d'erreur ou de succès.
     * * De stocker la commande créé en BDD.
     */
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
                    message: "La commande est impossible"
                })

            }
        }
        catch (err) {

            res.status(500).json({
                status: 'Fail',
                data: undefined,
                message: "Internal Server Error"
            });
        }

    }

    /** 
     * @method getOrders :
     * 
     * Une méthode permettant de :
     * * Controler les données entrantes lors de la consultation de toutes les commandes par une personne.
     * * Renvoyer un message d'avertissement en cas d'erreur ou de succès..
     */
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

    /** 
     * @method getOrderById :
     * 
     * Une méthode permettant de :
     * * Controler les données entrantes lors de la consultation d'une commande en particulier par une personne.
     * * Renvoyer un message d'avertissement en cas d'erreur ou de succès..
     */
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

    /** 
     * @method updateOrder :
     * 
     * Une méthode permettant de :
     * * Controler les données entrantes et vérifier que le protocole de saisie ou de modification soient bien respectés.
     * * Vérifier que la commande existe.
     * * Renvoyer un message d'avertissement en cas d'erreur ou de succès.
     * * Valider et remplacer en cas de succès.
     */
    async updateOrder(req: Request, res: Response) {

        const clientId = req.body.clientId;
        const orderId: number = parseInt(req.params.id)
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
                    message: "Demande incorrecte"
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
                message: "Internal Server Error",
            });
        }
    };

    /** 
     * @method deleteOrder :
     * 
     * Une méthode permettant de :
     * * Controler les données entrantes et vérifier que le protocole de saisie ou de modification soient bien respectés.
     * * Vérifier que la commande existe.
     * * Renvoyer un message d'avertissement en cas d'erreur ou de succès.
     * * Supprimer la commande si le protocole est respecté.
     */
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
            res.status(403).json({
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