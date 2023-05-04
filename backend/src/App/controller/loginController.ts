import { Request, Response } from "express";
import { knex } from "../configs/knexConfigs";
import config from '../configs/authConfigs'
import jwt from 'jsonwebtoken'

class loginController {
    public async LoginStudent(req: Request, res: Response) {
        const { cpf, name } = req.body;
        const user = await knex('Students').select('*').where({ cpf }, { name }).first();
        const id = await knex('Students').select('id').where('cpf', cpf).first()
        
        if (user.length === 0) {
            res.status(401).json({ message: 'Usuário não encontrado.' });
        } else if (user.cpf !== cpf && user.name !== name) {
            res.status(401).json({ message: 'cpf ou nome incorreto.' });
        } 

        else {
            return res.status(200).json({
                user: {
                    userId: id,
                    name: name,
                    cpf: cpf
                },
                token: jwt.sign(
                    {userId: id},
                    config.secret,
                    {expiresIn: config.expiresIn}
                )})
        }


    }
}

export default new loginController