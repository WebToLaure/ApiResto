import { Entity, PrimaryGeneratedColumn, BaseEntity,ManyToOne } from "typeorm"
import { Menu } from "./menu"
import { Restaurant } from "./restaurant"

@Entity('orders')
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

@ManyToOne (()=> Menu, (menu)=> menu.orders)

       menu: Menu

@ManyToOne(()=> Restaurant, (restaurant) => restaurant.orders)

  restaurant : Restaurant
} 