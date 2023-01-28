
/* import { Request, Response, NextFunction } from "express";
import { accessTokenSecret } from "../middleware/auth";
import * as jwt from 'jsonwebtoken';
import { Client } from "../entities/client";
import { ClientService } from "../services/clientService";

const clientService = new ClientService();


export const isAdmin = (req: Request, res: Response, next: () => void) => {

    const client = req.body.client;
    const admin = req.body.client.admin;

    if (client.admin === false) {

        res.status(403).json({

            status: "FAIL",
            message: "Seul l'administrateur est autorisé "

        });

        return;
    }

    next();

}; */