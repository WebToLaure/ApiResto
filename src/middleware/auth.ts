import * as express from 'express';
import * as jwt from 'jsonwebtoken';

export const accessTokenSecret = 'youraccesstokensecret';


export function authenticateJWT(req: express.Request, res: express.Response, next: express.NextFunction) {

    const authHeader: any = req.headers.authorization;
    const token = authHeader.split(' ')[1];

    if (token) {

        jwt.verify(token, accessTokenSecret, (err: any, decoded: any) => {

            if (err) {

                return res.sendStatus(401);

            }

            req.body.idToken = decoded.id;
            req.body.admin = decoded.admin;

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
