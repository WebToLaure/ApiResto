import { Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm"

@Entity('commandes')
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number


}