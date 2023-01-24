import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm"

@Entity('commandes')
export class Commande extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    @Column({
        default: true
    })
    isAvailable: boolean; // ou en Date A VOIR
    @Column()
    price: number;
}