import { Request, Response } from "express";
import { ClientService } from "../services/clientService";
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { accessTokenSecret } from "../middleware/auth";

const clientService = new ClientService();

/**@class ClientControllers
 * 
 * Une class permettant :
 * * De réunir plusieurs méthodes liées à l'accessibilité du client.
 * * De contrôler les informations entrantes, de les vérifier avant de les envoyer en base de données, suivant un protocole précis et renseigné.
 * * Celle-ci est dédiée uniquement à la création de comptes et au logging.
 */
export class ClientControllers {

    /** 
     * @method createClient :
     * 
     * Une méthode permettant de :
     * * Controler les données entrantes lors de la création d'un compte client.
     * * Vérifier et imposer que les contraintes soient bien respectées (longueur de caractères etc ...)
     * * Renvoyer un message d'avertissement en cas d'erreur ou de succès.
     * * Crypter le password grâce au hash/bcrypt lors de la création du compte client.
     */
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


    /** 
     * @method loginClient :
     * 
     * Une méthode permettant de :
     * * Controler les données entrantes lorsque le client les saisies.
     * * Vérifier que les données soient les bonnes avec celles stockées dans la BDD.
     * * Renvoyer un message d'avertissement en cas d'erreur ou de succès.
     * * Comparer le token.
     */
    async loginClient(req: Request, res: Response) {
        const surname = req.body.surname;
        const password = req.body.password;


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

                const accessToken = jwt.sign({ clientId: client.id, admin: client.admin }, accessTokenSecret);

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