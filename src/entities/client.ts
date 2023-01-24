import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Order } from "./order";


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

    @OneToMany(() => Order, order => order.client)
    order: Order

}