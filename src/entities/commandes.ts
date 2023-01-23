import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Commande {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    create_at: Date

    @Column()
    served: boolean // ou en Date A VOIR
}