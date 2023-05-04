import { knex } from "../configs/knexConfigs";
import { openDB } from "../configs/sqliteConfigs";
import jwt from 'jsonwebtoken'

interface studentsData {
    age: number,
    cpf: string,
    name: string,
    responsiblePhone: string,
    responsibleName: string
}


export const createStudent = async (data: studentsData) => {
    try {
        return await knex('Students').insert({
            age: data.age,
            cpf: data.cpf,
            name: data.name,
            responsiblePhone: data.responsiblePhone,
            responsibleName: data.responsibleName
        })
    } catch (error: any) {
        if (error.code === "ER_DUP_ENTRY" && error.errno === 1062) {
            throw new Error("O cpf já está cadastrado");
        } else {
            throw new Error("Erro ao criar cliente: " + error.message);
        }
    }
}