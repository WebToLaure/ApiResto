import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm"

@Entity('restaurants')
export class Restaurant extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    ville: string



}
