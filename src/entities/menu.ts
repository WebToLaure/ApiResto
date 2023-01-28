import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Order } from "./order"

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
