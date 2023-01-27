import { Request, Response, NextFunction } from "express";




export function Admin (req: Request, res: Response, next: NextFunction) {

    const Administrator = req.body.admin;

    if (Administrator) {

        next();

    } else {

        res.status(401).json({
            status: "FAIL",
            message: "Seul l'administrateur est autorisé "
        });
    }

}