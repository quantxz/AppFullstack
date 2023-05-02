export const knex = require('knex')({
    client: 'sqlite3', // or 'better-sqlite3'
    useNullAsDefault: true,
    connection: {
        filename: 'C:/Users/canal/OneDrive/Área de Trabalho/App/backend/prisma/database.db',
    }
});