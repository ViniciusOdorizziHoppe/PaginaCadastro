import { conexao } from "../conexao/conectar.js"


export async function getPessoas() {
    const pool = conexao().promise()

    try {
        const {rows} = await pool.query('SELECT * FROM PESSOAS')
        return {
            sucesso: true,
            resp: rows
        }
        
    } catch (error) {
        return {
            sucesso: false,
            resp: error
        }
    }
}
