import { knex } from "../configs/knexConfigs"

export const deleteStudent = async (id: any) => {
    try {
        return await knex('Students').where('id', id).del()
    } catch(error: any) {
        throw new Error('não fio possivel deletar os dados do aluno ' + error.message)
    }
}