import { Request, Response, NextFunction } from "express";


export const isAdmin = (req: Request,res: Response,next: NextFunction) => {


if (req.body.admin) {

    next();

} else {

    res.status(401).json({
        status: "FAIL",
        message: "Seul l'administrateur est autorisé "
    });
}

}