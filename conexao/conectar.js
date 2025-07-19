import mysql2 from "mysql2"

export function conexao() {
    const obj = {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'vo250110',
        database: "projeto"
    }
    const conectar = mysql2.createPool(obj)
    return conectar
}
