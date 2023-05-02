import { Request, Response } from "express";
import { createStudent } from "../model/addAluno.model";
import { knex } from "../configs/knexConfigs";
import { updateStudents } from "../model/updateStudent.model";
import { deleteStudent } from "../model/deleteStudent.model";

class Controller {

    public async showAllStudents(req: Request, res: Response) {
        return res.json(
            await knex('Students').select('*')
        )
    }

    public async createStudent(req: Request, res: Response) {
        const { ...data } = req.body;
        
        try {
            await createStudent(data)
            const newStudents = await knex('Students').select('*')
            return res.json(newStudents)
        } catch (error: any) {
            throw new Error('erro ao tentar cadastrar aluno ' + error.message)
        }
    }

    public async updateStudent(req: Request, res: Response) {
        const { id } = req.params;
        const { ...data } = req.body;
        
        try {
            await updateStudents(id, data)
            const newStudents = await knex('Students').select('*')
            return res.json(newStudents)
        } catch (error: any) {
            throw new Error('erro ao tentar cadastrar aluno ' + error.message)
        }
    }

    public async deleteStudent(req: Request, res: Response) {
        const { id } = req.params;
        
        try { 
            await deleteStudent(id)
            const newStudents = await knex('Students').select('*')
            return res.json(newStudents)
        } catch (error: any) {
            throw new Error('erro ao tentar cadastrar aluno ' + error.message)
        }
    }


}

export default new Controller