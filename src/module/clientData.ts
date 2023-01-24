import * as dotenv from 'dotenv';
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Client } from "../entities/client"
dotenv.config({ path: '.env' })

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Client],
    synchronize: false, // A PASSER A TRUE POUR LA SYNCHRO AVEC LA BDD
    logging: false,
})