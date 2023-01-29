
import { Client } from "../entities/client";

/**
 * @class ClientService 
 * 
 * Une class permettant :
 * * De générer des requêtes SQL précise à une demande spécifique.
 * * Celle-ci est liée uniquement à des requêtes de création d'un compte client et à logger celui-ci.
 */
export class ClientService {

    /** 
     * @method createClient :
     * * Method avec requête SQL permettant de créer un nouveau compte client avec uniquement un "surname et un password" comme paramètres.
     * * Le hash permet de crypter le password une fois créé. 
     */
    async createClient(surname: string, hash: string): Promise<Client | undefined> {

        const client = new Client()
        client.surname = surname
        client.password = hash


        await client.save()

        return client

    };

    /** 
     * @method loginClient :
     * * Method avec requête SQL permettant de logger un client déjà inscrit dans la base de données.
     * * La requête permet de trouver le client via son surname. 
     */
    async loginClient(surname: string): Promise<Client | undefined> {

        const login = await Client.findBy({ surname });

        if (login) {

            return login[0]
        }

        return undefined

    };

};






