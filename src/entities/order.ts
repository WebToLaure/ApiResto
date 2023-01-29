import { Client } from "./client"
import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from "typeorm"
import { Menu } from "./menu"
import { Restaurant } from "./restaurant"

@Entity('order')
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Client, (client) => client.orders,{onDelete:'CASCADE'})
    client: Client

    @ManyToOne(() => Menu, (menu) => menu.orders,{onDelete:'CASCADE'})
    menu: Menu

    @ManyToOne(() => Restaurant, (restaurant) => restaurant.orders,{onDelete:'CASCADE'})
    restaurant: Restaurant
}