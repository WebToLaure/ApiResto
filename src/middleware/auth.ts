import * as express from 'express';
import * as jwt from 'jsonwebtoken';

export const accessTokenSecret = 'youraccesstokensecret';


export function authenticateJWT(req: express.Request, res: express.Response, next: express.NextFunction) {

    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, token) => {
            if (err) {

                res.sendStatus(401).json({
                    status: "FAIL",
                    data: undefined,
                    message: "Veuillez vous authentifier"
                });
                return;

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
