import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Order } from "./order";

/**
 * @class Client 
 * 
 * Une class permettant :
 * * De créer une table dans une base de donnée.
 * * Grâce à Type ORM toute la table peut-être modifier depuis cette class, sans devoir intéragir manuellement le script ou la BDD.
 * * De créer les contraintes à une table (defaut, types etc ...).
 * * De créer des relations 1toM / 1to1 / MtoM
 */
@Entity('client')
export class Client extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    surname: string;

    @Column()
    password: string;

    @Column({
        default: false
    })
    admin: boolean;

    @OneToMany(() => Order, order => order.client)
    orders: Order[]


}