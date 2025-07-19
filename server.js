import express from "express"
import path from "path"
import fs from "fs"
import { fileURLToPath } from "url"
import { dirname } from "path"
import { conexao } from "./conexao/conectar.js"
import { getPessoas } from "./model/pessoas.js"
const pessoas = await getPessoas()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const porta = 3000
const app = express()
const pastaHtml = path.join(__dirname,'PaginaCadastro/HTML')
app.use(express.static(pastaHtml))
app.use(express.json())
app.use(express.urlencoded( {extended:true}))
app.get('/', (req,res)=> {
    const pagina = fs.readFileSync(`${pastaHtml}/Cadastro.html`, `utf-8`)
    res.send(pagina)
})
app.get('/getPessoas', async (req, res)=> {
    try {
        const resposta = await pessoas.getPessoas()
        res.json(resposta)
    } catch (error) {
        res.json({error: error})
    }
})
app.get('/cadastro', async (req,res)=> {
    res.sendFile(__dirname + "/HTML/Cadastro.html")
})

app.post('/cadastro', async (req,res)=> {
    const { email , senha} = req.body

    try {
        await conexao.execute (
            'INSERT INTO pessoas (email,senha) VALUES (?,?)',
            [email ,senha]
        )
        res.send('Cadastro Salvo no Banco De Dados')
    } catch (error) {
        console.log('Erro ao salvar no Banco De Dados:' + error)
        res.status(500).send("Erro ao cadastrar usuario")
    }

    res.send("Cadastro Recebido Com Sucesso")
})

app.listen(porta, ()=> {
    console.log(`servidor rodando em http://localhost:${porta}`)
})



