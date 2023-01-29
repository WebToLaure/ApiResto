import { MenuService } from "../services/menuService";
import { Request, Response } from "express";



const menuService = new MenuService();

/**@class MenuControllers
 * 
 * Une class permettant :
 * * De réunir plusieurs méthodes liées à la construction de la partie menu.
 * * De contrôler les informations entrantes, de les vérifier avant de les envoyer en base de données, suivant un protocole précis et renseigné.
 * * Celle-ci est dédiée uniquement à la création, à la récupération, à la mise à jour et à la suppression des menus.
 */

export class MenuControllers {

    /** 
     * @method CreateMenu :
     * 
     * Une méthode permettant de :
     * * Controler les données entrantes, lors de la création d'un menu.
     * * Vérifier et imposer que les contraintes soient bien respectées (name, price, type etc ...)
     * * Renvoyer un message d'avertissement en cas d'erreur ou de succès.
     * * De stocker le menu créé en BDD.
     */
    async CreateMenu(req: Request, res: Response) {
        const name = req.body.name;
        const price = req.body.price;
        const admin = req.body.admin;

        if (!name) {
            res.status(400).json({
                status: "FAIL",
                data: undefined,
                message: "veuillez renseigner tous les champs"
            });
            return;
        }

        if (price == null) {
            res.status(400).json({
                status: "FAIL",
                data: undefined,
                message: "veuillez renseigner tous les champs"
            });
            return;
        }

        if (price <= 0) {
            res.status(400).json({
                status: "FAIL",
                data: undefined,
                message: "Montant non autorisé"
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

    /** 
     * @method getAllMenus :
     * 
     * Une méthode permettant de :
     * * Controler les données entrantes lors de la consultation de tous les menus par une personne.
     * * Renvoyer un message d'avertissement en cas d'erreur ou de succès..
     */
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

    /** 
     * @method getOneMenu :
     * 
     * Une méthode permettant de :
     * * Controler les données entrantes lors de la consultation d'un menu en particulier par une personne.
     * * Renvoyer un message d'avertissement en cas d'erreur ou de succès..
     */
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
                    message: "le menu n'existe pas ou plus",
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

    /** 
     * @method updateMenu :
     * 
     * Une méthode permettant de :
     * * Controler les données entrantes et vérifier que le protocole de saisie ou de modification soient bien respectés.
     * * Vérifier que le menu existe.
     * * Renvoyer un message d'avertissement en cas d'erreur ou de succès.
     * * Valider et remplacer en cas de succès.
     */
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

    /** 
     * @method deleteMenu :
     * 
     * Une méthode permettant de :
     * * Controler les données entrantes et vérifier que le protocole de saisie ou de modification soient bien respectés.
     * * Vérifier que le menu existe.
     * * Renvoyer un message d'avertissement en cas d'erreur ou de succès.
     * * Supprimer le menu si le protocole est respecté.
     */
    async deleteMenu(req: Request, res: Response) {

        const id: number = parseInt(req.params.id);

        const menuExist = await menuService.getMenuById(id);

        if (!menuExist) {
            res.status(404).json({
                status: "NOT FOUND",
                data: undefined,
                message: "le menu n'existe pas ou plus",
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

