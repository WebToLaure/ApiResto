import { Client } from "./client"
import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from "typeorm"
import { Menu } from "./menu"
import { Restaurant } from "./restaurant"

/**
 * @class Order 
 * 
 * Une class permettant :
 * * De créer une table dans une base de donnée.
 * * Grâce à Type ORM toute la table peut-être modifier depuis cette class, sans devoir intéragir manuellement le script ou la BDD.
 * * De créer les contraintes à une table (defaut, types etc ...).
 * * De créer des relations 1toM / 1to1 / MtoM
 */
@Entity('order')
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Client, (client) => client.orders, { onDelete: 'CASCADE' })
    client: Client

    @ManyToOne(() => Menu, (menu) => menu.orders, { onDelete: 'CASCADE' })
    menu: Menu

    @ManyToOne(() => Restaurant, (restaurant) => restaurant.orders, { onDelete: 'CASCADE' })
    restaurant: Restaurant
}