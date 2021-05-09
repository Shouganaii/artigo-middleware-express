const express = require('express');
const app = express()
const eventEmitter = require('events')

const meuEvento = new eventEmitter()

meuEvento.on('acessou', () => {
    console.log('acessou a página')
})


app.use((req, res, next) => {
    req.meuEvento = meuEvento
    next()
})

app.get('/', (req, res) => {

    req.meuEvento.emit('acessou')

    res.send('evento engatilhado!')

})

//Middlewares a nível de aplicativo

app.listen(3000, () => console.log('Server running at port 3000'))