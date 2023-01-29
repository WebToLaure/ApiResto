import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from "typeorm";
import { Order } from "./order";

/**
 * @class Restaurant 
 * 
 * Une class permettant :
 * * De créer une table dans une base de donnée et ses spécificités.
 * * Grâce à Type ORM toute la table peut-être modifier depuis cette class, sans devoir intéragir manuellement le script ou la BDD.
 * * De créer les contraintes à une table (defaut, types etc ...).
 * * De créer des relations 1toM / 1to1 / MtoM
 */

@Entity('restaurant')
export class Restaurant extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    city: string

    @OneToMany(() => Order, (order) => order.restaurant)

    orders: Order[]

}
