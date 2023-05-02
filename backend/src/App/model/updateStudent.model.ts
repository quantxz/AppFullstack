import { knex } from "../configs/knexConfigs"

interface studentsData {
    age?: number,
    cpf?: string,
    name?: string,
    responsiblePhone?: string,
    responsibleName?: string
}

export const updateStudents = async (id: any, data: studentsData) => {
    try {
        return await knex('Students').where('id', id).update({
            age: data.age,
            cpf: data.cpf,
            name: data.name,
            responsiblePhone: data.responsiblePhone,
            responsibleName: data.responsibleName
        })
    }  catch(error: any) {
        throw new Error('não fio possivel atualizar os dados do aluno ' + error.message)
    }
}