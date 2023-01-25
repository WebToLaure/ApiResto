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
    }

    async getMenus(): Promise< Menu[] | undefined> {

        const menus = await Menu.find();

        if (menus != null) {  // != not egal  nul

            return menus;
        }

        return undefined;

    }

    async getMenuByName(name : string, price: number): Promise<Menu | undefined> {

        const menu = await Menu.findOneBy({ name : name, price : price });

        if (menu) {

            return menu;
        }

        return undefined;

    }

    async updateMenu(name: string, newName: string) {



    }// pas fini


    async deleteMenu(id: number): Promise < Menu | undefined > {

        const menu = await Menu.findOneBy({id});

        menu?.remove();

        if (menu) {

            return menu;
        }

        return undefined;
    }
}
