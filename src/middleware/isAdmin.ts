/* import { Request, Response, NextFunction } from "express";



export function isAdmin(req: Request, res: Response, next: NextFunction) {

    const admin: boolean = req.body.admin;

    if (admin === true) {

        res.sendStatus(200);

        next();


    } else {

        res.status(403).json({
            status: "FAIL",
            message: "Echec Authentification"
        });

        return;
    }



};  */