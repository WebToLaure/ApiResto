import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity('menus')
export class Menu extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    amount: number

}