import { RestaurantService } from "../services/restaurantService";
import { Request, Response } from "express";


const restaurantService = new RestaurantService();

export class RestaurantControllers {

    async createRestaurant(req: Request, res: Response) {

        const restaurantCity = req.body.city;

        if (typeof (restaurantCity) !== 'string' || restaurantCity.length == 0) { 

            res.status(400).json({
                status: 'FAIL',
                data: undefined,
                message: "Erreur de structure"
            });
            return
        }        


        try {

            const data = await restaurantService.createRestaurant(restaurantCity);

            res.status(201).json({
                status: "OK",
                data: data,
                message: "Le restaurant a été créé"
            });

        }
        catch (err) {

            res.status(500).json({
                status: 'Fail',
                data: undefined,
                message: "Erreur de status"
            });
        }
    };

    async getAllRestaurant(req: Request, res: Response) {

        try {
            const data = await restaurantService.getAllRestaurant();

                res.status(200).json({
                    status: "OK",
                    data: data,
                    message: "Voici la liste des restaurants",
                });

        } catch (err) {

            res.status(500).json({
                status: "FAIL",
                data: undefined,
                message: "erreur serveur",
            });
        }
    };

    async getRestaurantById(req: Request, res: Response) {

        const id : number = parseInt(req.params.id);

        try {
            const dataRestaurant = await restaurantService.getRestaurantById(id);

            if (dataRestaurant) {
                res.status(200).json({
                    status: "OK",
                    data: dataRestaurant,
                    message: "Voici votre restaurant",
                });

            } else {
                res.status(404).json({
                    status: "NOT FOUND",
                    data: undefined,
                    message: "Le restaurant n'existe pas",
                });
            }

        } catch (err) {
            res.status(500).json({
                status: "FAIL",
                data: undefined,
                message: "erreur serveur",
            });
        }
    }

    async updateRestaurant(req: Request, res: Response) {

        const id : number = parseInt(req.params.id)
        const city : string = req.body.city

        if (!city) { 

            res.status(400).json({
                status: 'FAIL',
                data: undefined,
                message: "Renseignez le champs"
            });
            return
        }

        try {

            if (typeof (city) !== 'string'|| city.length == 0) { 

                res.status(400).json({
                    status: 'FAIL',
                    data: undefined,
                    message: "Erreur de structure"
                });
                return
            }
            

            // check Restaurant
            const isRestaurantExist = await restaurantService.getRestaurantById(id);

            if (isRestaurantExist === undefined) {

                res.status(404).json({
                    status: 'FAIL',
                    data: undefined,
                    message: "Le restaurant n'existe pas"
                });

                return;
            }

            const data = await restaurantService.updateRestaurant(id, city);

            if (data) {

                res.status(200).json({
                    status: 'OK',
                    data: data,
                    message: "Edition ok"
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


    async deleteRestaurant(req: Request, res: Response) {

        const id: number = parseInt(req.params.id);

        const menuExist = await restaurantService.getRestaurantById(id);

        if (!menuExist) {
            res.status(404).json({
                status: "NOT FOUND",
                data: undefined,
                message: "Le restaurant n'existe pas",
            });
            return;
        }

        try {
            const data = await restaurantService.deleteRestaurant(id);

            if (data) {
                res.status(200).json({
                    status: "OK",
                    data: data,
                    message: "Restaurant supprimé"
                });
            };

        }
        catch (err) {
            res.status(500).json({
                status: "FAIL",
                data: undefined,
                message: "erreur serveur",
            });
        }
    }
}