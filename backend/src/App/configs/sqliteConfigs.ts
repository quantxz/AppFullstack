import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const openDB = async () => {
    return open({
        filename: 'C:/Users/canal/OneDrive/Área de Trabalho/App/backend/prisma/database.db',
        driver: sqlite3.Database
    })
}