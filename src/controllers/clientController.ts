import { ClientService } from "../services/clientService";
import * as bcrypt from 'bcrypt';
import  {Request, Response}  from "express";
import * as jwt from 'jsonwebtoken';
import { accessTokenSecret } from "../middleware/auth";

const clientService = new ClientService();


export class ClientControllers {
    async createClient(req : Request, res : Response) {

        const surname = req.body.surname;
        const password = req.body.password;

        bcrypt.hash(password, 10, async function (err : any, hash : string) {

            try {
                const client = await clientService.createClient(surname, hash);

                res.status(201).json({
                    status: "OK",
                    data: client,
                    message: "Votre compte a été crée avec succès"
                });

            } catch (err) {
                res.status(404).json({
                    status: "FAIL",
                    data: undefined,
                    message: "erreur statut"

                });
            }

        });

    }

    async loginClient(req : Request, res : Response) {
        const surname = req.body.surname;
        const password = req.body.password;

        try {
            const client = await clientService.loginClient(surname);

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
                    res.status(403).json({
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