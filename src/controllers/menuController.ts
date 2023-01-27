import { MenuService } from "../services/menuService";
import { Request, Response } from "express";



const menuService = new MenuService();

export class MenuControllers {
    async CreateMenu(req: Request, res: Response) {
        const name = req.body.name;
        const price = req.body.price;


        if (!name) {
            res.status(400).json({
                status: "FAIL",
                data: undefined,
                message: "veuillez renseigner tous les champs"
            });
            return;
        }

        if (price == null || price <=0) {
            res.status(400).json({
                status: "FAIL",
                data: undefined,
                message: "veuillez renseigner tous les champs"
            });
            return;
        }

        if (typeof name !== "string" || typeof price != "number") {

            res.status(400).json({
                status: "FAIL",
                data: undefined,
                message: "erreur de syntaxe"
            });

            return;
        }

        try {
            const menu = await menuService.addMenu(name, price);

            res.status(201).json({
                status: "Created",
                data: menu,
                message: "Création du menu effectuée"
            });

        }
        catch (err) {
            res.status(500).json({
                status: "FAIL",
                data: undefined,
                message: "erreur serveur",
            });
        }
    }
    async getAllMenus(_req: Request, res: Response) {

        try {
            const menu = await menuService.getMenus();

            res.status(200).json({
                status: "OK",
                data: menu,
                message: "LISTE DES MENUS"
            });

        } catch (err) {
            res.status(500).json({
                status: "ERROR",
                data: undefined,
                message: "une erreur est survenue"
            });
        }
    }

    async getOneMenu(req: Request, res: Response) {

        const id: number = parseInt(req.params.id); // permet de recup l'id(en string) sous forme de number

        try {
            const menu = await menuService.getMenuById(id);

            if (menu) {
                res.status(200).json({
                    status: "OK",
                    data: menu,
                    message: "MENU CLIENT",
                });

            } else {
                res.status(404).json({
                    status: "NOT FOUND",
                    data: undefined,
                    message: "le menu n'existe pas",
                });
            }

        } catch (err) {
            res.status(500).json({
                status: "ERROR",
                data: undefined,
                message: "erreur serveur",
            });
        }
    }
    async updateMenu(req: Request, res: Response) {

        const name = req.body.name;
        const price = req.body.price;

        const id: number = parseInt(req.params.id);

        if (typeof (price) !== "number" || typeof (name) !== "string") {
            res.status(400).json({
                status: "FAIL",
                data: undefined,
                message: "erreur de syntaxe"
            });
            return;
        }

        const menuExist = await menuService.getMenuById(id);

        if (!menuExist) {
            res.status(404).json({
                status: "NOT FOUND",
                data: undefined,
                message: "le menu n'existe pas"
            });
            return;
        }

        try {

            const menuExist = await menuService.updateMenu(id, name, price);

            if (menuExist) {
                res.status(200).json({
                    status: "UPDATED",
                    data: menuExist,
                    message: "Modification effectuée"
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

    async deleteMenu(req: Request, res: Response) {

        const id: number = parseInt(req.params.id);

        const menuExist = await menuService.getMenuById(id);

        if (!menuExist) {
            res.status(404).json({
                status: "NOT FOUND",
                data: undefined,
                message: "le menu n'existe pas",
            });
            return;
        }

        try {
            const data = await menuService.deleteMenu(id);

            if (data) {
                res.status(200).json({
                    status: "OK",
                    data: data,
                    message: "SUPPRESSION MENU EFFECTUEE"
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

