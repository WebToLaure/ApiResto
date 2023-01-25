import { MenuService } from "../services/menuService";

const menuService = new MenuService();


export class MenuController {
    /** CreateArticle => renvoie à la méthode articlesService.addArticle */
    export const CreateMenu = async (req : any, res: any) {

        const userId = req.userId;
        const message = req.body.message;
        const title = req.body.title;

        if (typeof message !== "string" || typeof title != "string") {

            res.status(400).json({
                status: "FAIL",
                data: undefined,
                message: "erreur de syntaxe"
            });
            return;
        }

        try {
            const article = await menuService.addMenu(title, message, userId);

            res.status(201).json({
                status: "Created",
                data: article,
                message: "Article publié"
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
    /** function getAllArticles => renvoie à la méthode articlesService.getArticles */
    async getAllMenus(req, res) {

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
    /** function getByArticle => renvoie à la méthode articlesService.getOneArticle */
    async getByArticle(req :any, res: any) {

        const id = req.params.id;

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
    /** function updateArticle => renvoie à la méthode articlesService.getOneArticle + articlesService.updateArticle */
    async updateArticle(req: any, res: any) {

        const userId = req.userId;
        const title = req.body.title;
        const message = req.body.message;
        const id = req.params.id;

        if (!message || typeof (message) !== "string") {
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
                message: "l'article n'existe pas"
            });
            return;
        }

        if (menuExist.user_id !== userId) {
            res.status(401).json({
                status: "FAIL",
                data: undefined,
                message: "non autorisé"
            });
            return;
        }

        try {
            const data = await menuService.updateMenu(id, title, message);


            if (data) {
                res.status(200).json({
                    status: "UPDATED",
                    data: data,
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
    /** function deleteArticle => renvoie à la méthode articlesService.getOneArticle + articlesService.deleteArticle */
    async deleteArticle(req: any, res: any) {

        const id = req.params.id;
        const userId = req.userId;

        const menuExist = await menuService.deleteMenu(id);

        if (!menuExist) {
            res.status(404).json({
                status: "NOT FOUND",
                data: undefined,
                message: "le menu n'existe pas",
            });
            return;
        }

        if (menuExist.client_id !== userId) {
            res.status(401).json({
                status: "ERREUR",
                data: null,
                message: "non autorisé"
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

