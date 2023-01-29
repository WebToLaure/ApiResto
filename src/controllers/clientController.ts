import { Request, Response } from "express";
import { ClientService } from "../services/clientService";
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import { Client } from "../entities/client";
import { accessTokenSecret} from "../middleware/auth";
import { Index } from "typeorm";


const clientService = new ClientService();


export class ClientControllers {
    async createClient(req: Request, res: Response) {

        const surname: string = req.body.surname;
        const password: string = req.body.password;


        if (surname.length <= 4 || surname == null) {

            res.status(400).json({
                status: "FAIL",
                data: undefined,
                message: "le champs doit comprendre 4 caractères mini, avec des lettres"
            });

            return;
        }

        if (password.length <= 5 || password == null) {

            res.status(400).json({
                status: "FAIL",
                data: undefined,
                message: "le champs doit comprendre 5 caractères mini, avec des lettres"
            });

            return;
        }



        bcrypt.hash(password, 10, async function (err: any, hash: string) {

            try {
                const client = await clientService.createClient(surname, hash);

                res.status(201).json({
                    status: "OK",
                    data: client,
                    message: "Votre compte a été crée avec succès"
                });

            } catch (err) {

                res.status(500).json({
                    status: "FAIL",
                    data: undefined,
                    message: "Internal Server Error"

                });
            }

        });

    }

    async loginClient(req: Request, res: Response) {
        
        const surname :string = req.body.surname;
        const password:string = req.body.password;


        try {
            const client = await clientService.loginClient(surname);
            console.log(client, 'Login ok');

            if (!client) {  // si l'identifiant est incorrect
                res.status(404).json({
                    status: "fail",
                    message: "Compte inexistant",
                    data: null
                })

                return;
            }
            bcrypt.compare(password, client.password, (err, result) => {

                const accessToken = jwt.sign({ clientId: client.id }, accessTokenSecret);

                if (result === true) {
                    res.status(200).json({
                        status: "succes",
                        message: "Authentification réussi",
                        data: accessToken
                    })
                }
                else {
                    res.status(401).json({
                        status: "fail",
                        message: "Authentification FAIL",
                        data: null
                    })
                }
            });
        }

        catch (err) {
            res.status(500).json({
                status: "FAIL",
                message: "erreur serveur",
                data: null
            })
        }
    };
}