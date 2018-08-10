const express = require('express')
const server = express()

// .use -> ele pega toda requisição que venha com a url começando com /api
// Se apagar a url no md ele pega toda requisição que venha para a aplicação e passa por esse md

server.use('/api', function(req, res, next) {
    console.log('Inicio...')
    next()
    console.log('Fim...')
})

server.use('/api', function(req, res) {
    console.log('Resposta...')
    res.send('<h1>API!</h1>')
})
server.listen(3000, () => console.log('Executando...'))