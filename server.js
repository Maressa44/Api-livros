const express = require('express')
const path = require('path')
const fs = require('fs')

const server = express()
const porta = 3000

//localização da pagina para o navegador 
server.use(express.static(path.join(__dirname, 'public')))

server.get('/api/livros', (req,res) => {
    fs.readFile(path.join(__dirname, 'api','livros.json'), 'utf-8', (error,data) => {
            if(error){
                console.error('Erro ao ler arquivo:' , error)
                res.status(500).send('Erro no servidor')
                return //ele para a execução caso encontre algum erro
            }else{
                res.json(JSON.parse(data)) //'parse' converte para formato json
            }
    })
})

server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
}) 
