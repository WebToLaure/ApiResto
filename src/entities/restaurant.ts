import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm"

@Entity('restaurant')
export class Restaurant extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    city: string

}
