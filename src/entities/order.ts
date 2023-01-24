import { Client } from "./client"
import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from "typeorm"
import { Menu } from "./menu"
import { Restaurant } from "./restaurant"

@Entity('order')
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Client, (client) => client.order)
    client: Client

    @ManyToOne(() => Menu, (menu) => menu.orders)

    menu: Menu

    @ManyToOne(() => Restaurant, (restaurant) => restaurant.orders)

    restaurant: Restaurant
} 