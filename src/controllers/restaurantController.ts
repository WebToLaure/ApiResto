import { RestaurantService } from "../services/restaurantService";
import { Request, Response } from "express";

const restaurantService = new RestaurantService();

export class RestaurantControllers {

    async createRestaurant(req: Request, res: Response) {

        const restaurantCity = req.body.city;

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


}