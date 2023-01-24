import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"


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



}