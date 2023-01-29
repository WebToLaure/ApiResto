import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Order } from "./order"

/**
 * @class Menu 
 * 
 * Une class permettant :
 * * De créer une table dans une base de donnée.
 * * Grâce à Type ORM toute la table peut-être modifier depuis cette class, sans devoir intéragir manuellement le script ou la BDD.
 * * De créer les contraintes à une table (defaut, types etc ...).
 * * De créer des relations 1toM / 1to1 / MtoM
 */
@Entity('menus')
export class Menu extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        type: "decimal",
        precision: 5,
        scale: 2,
        default: 0
    })
    price: number;

    @OneToMany(() => Order, (order) => order.menu)
    orders: Order[]

}
