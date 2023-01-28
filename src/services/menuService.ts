import { Menu } from '../entities/menu';

export class MenuService {

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

    async getMenus(): Promise<Menu[] | undefined> {

        const menus = await Menu.find();

        if (menus != null) {  // != not egal  nul

            return menus;
        }

        return undefined;

    };

    async getMenuById(id: number): Promise<Menu | undefined> {

        const menu = await Menu.findBy({ id });

        if (menu != null) {

            return menu[0];
        }

        return undefined;

    };// renvoie le menu par son Id

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

    async deleteMenu(id: number): Promise<Menu | undefined> {

        const menu = await Menu.findOneBy({ id });

        if (menu) {

            return menu?.remove();
        }
        return undefined;
    };

}
