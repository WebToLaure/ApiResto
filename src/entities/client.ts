import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm"


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