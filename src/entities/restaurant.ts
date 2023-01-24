import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from "typeorm";
import { Order } from "./order";

@Entity('restaurant')
export class Restaurant extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    city: string

    @OneToMany (()=> Order, (order)=> order.restaurant)

    orders: Order []

}
