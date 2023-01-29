import { Menu } from '../entities/menu';

/**
 * @class MenuService
 * 
 * Une class permettant :
 * * De générer des requêtes SQL précise à une demande spécifique.
 * * Celle-ci est liée uniquement à des requêtes CREATE, GET ALL / By Id, UPDATE et DELETE pour la partie menu.
 */
export class MenuService {

    /** 
     * @method addMenu :
     * * Method avec requête SQL permettant de créer un nouveau menu avec "name et price" comme paramètres. 
     */
    async addMenu(name: string, price: number): Promise<Menu | undefined> {

        const newMenu = new Menu();
        newMenu.name = name;
        newMenu.price = price;

        const menu = await newMenu.save();

        if (menu) {

            return menu;
        }

        return undefined;
    };

    /** 
     * @method getMenus :
     * * Method avec requête SQL permettant de récupérer tous les menus existants. 
     */
    async getMenus(): Promise<Menu[] | undefined> {

        const menus = await Menu.find();

        if (menus != null) {  // != not egal  nul

            return menus;
        }

        return undefined;
    };

    /** 
     * @method getMenuById :
     * * Method avec requête SQL permettant de récupérer un menu existant via son id comme paramètre. 
     */
    async getMenuById(id: number): Promise<Menu | undefined> {

        const menu = await Menu.findBy({ id });

        if (menu != null) {

            return menu[0];
        }

        return undefined;
    };


    /** 
     * @method updateMenu :
     * * Method avec requête SQL permettant de modifier ou de mettre jour les données d'un menu . 
     */
    async updateMenu(id: number, name: string, price: number): Promise<Menu | undefined> {

        const menuUpdated = new Menu();

        menuUpdated.name = name;
        menuUpdated.price = price;
        menuUpdated.id = id;

        const menu = await menuUpdated.save();

        if (menu) {

            return menu;
        }
        return undefined;

    };

    /** 
     * @method deleteMenu :
     * * Method avec requête SQL permettant de supprimer un menu via son id comme paramètre. 
     */
    async deleteMenu(id: number): Promise<Menu | undefined> {

        const menu = await Menu.findOneBy({ id });

        if (menu) {

            return menu?.remove();
        }
        return undefined;
    };

}
