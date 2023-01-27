import { Request, Response, NextFunction } from "express";




export function isAdmin (req: Request,res: Response,next: NextFunction) {

console.log(req.body.client);

const Administrator = req.body.client;

if (Administrator) {

    next();

} else {

    res.status(401).json({
        status: "FAIL",
        message: "Seul l'administrateur est autorisé "
    });
}



}