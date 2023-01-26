
import { Client } from "../entities/client";

export class ClientService {

    async createClient(surname: string, hash: string): Promise < Client | undefined > {

        const client = new Client()
        client.surname = surname
        client.password = hash

        await client.save()

        return client

    };

    async loginClient(surname: string): Promise < Client | undefined > {

        const login = await Client.findBy({ surname });

        if (login) {

            return login[0]
        }

        return undefined

    };

};






