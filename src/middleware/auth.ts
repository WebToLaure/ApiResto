import * as express from 'express';
import * as jwt from 'jsonwebtoken';

export const accessTokenSecret = 'youraccesstokensecret';

/**
 * @function authenticateJWT
 * 
 * Une fonction permettant :
 * * De créer un système d'authentification avec un contrôle de sécurité qui compare le Token et ses droit d'accès.
 * * Octrois grâce à celui-ci, la possibilité à un client, certaines actions qui leurs sont dédiés comme (create, get, update, delete  order (commande)).
 * * Dans le cas ou le client à le droit à une action comme "create, delete etc ...", next() permet au compte vérifié de continuer ses actions qui lui sont autorisées.  
 */

export function authenticateJWT(req: express.Request, res: express.Response, next: express.NextFunction) {

    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, token) => {
            if (err) {

                return res.sendStatus(401);

            }

            req.body.client = token;

            next();

        });
    } else {
        res.status(401).json({
            status: "FAIL",
            data: undefined,
            message: "Veuillez vous authentifier"
        });
    }

};
