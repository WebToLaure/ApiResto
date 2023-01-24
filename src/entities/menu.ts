import { Entity, BaseEntity, Column, PrimaryGeneratedColumn,OneToMany } from "typeorm"
import { Order } from "./order"

@Entity('menus')
export class Menu extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({
        type:'numeric'
    })
    price: number

    @OneToMany (() => Order, (order) => order.menu)
    orders : Order[]

} 