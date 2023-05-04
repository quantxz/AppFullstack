import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import config from '../configs/authConfigs'

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers.authorization;

    if(!auth) {
        return res.status(401).json({
            "error": true,
            "code": 130,
            "message": "authentication token doesn't exist"
        })
    }

    const [ Bearer, token ] = auth.split(' ');

    jwt.verify(token, config.secret, (error, decoded) => {
        if (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({
                    "error": true,
                    "code": 130,
                    "message": "authentication token has expired"
                });
            } else if (error.name === 'JsonWebTokenError') {
                return res.status(401).json({
                    "error": true,
                    "code": 130,
                    "message": "authentication token is invalid"
                });
            } else {
                return res.status(500).json({
                    "error": true,
                    "code": 500,
                    "message": "An internal error occurred on the server"
                });
            }
        } else {
            next(); // chama o próximo middleware ou rota
        }
    });
};
