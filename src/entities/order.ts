import { Client } from "./client"
import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from "typeorm"

@Entity('order')
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne (() => Client, (client) => client.order)
    client: Client
}