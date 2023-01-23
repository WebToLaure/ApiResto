import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    ville: string

}
