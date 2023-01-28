import { Request, Response, NextFunction } from "express";
import { accessTokenSecret } from "../middleware/auth";
import * as jwt from 'jsonwebtoken';




export const isAdmin = (req: Request, res: Response, next: () => void ) => {

    const admin = req.body.admin;

    if (!admin) {

        res.status(403).json({

            status: "FAIL",
            message: "Seul l'administrateur est autorisé "
           
        });

        return;
    }

    next();

};