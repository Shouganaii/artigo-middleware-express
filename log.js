const express = require('express');
const app = express()

function log(params) {
    console.log('Use isso para salvar algo no banco de dados para auditoria,por exemplo')
    console.log(params)
}

app.use((req, _res, next) => {
    req.log = log
    next()
})

app.get('/', (req, res) => {

    req.log('Usuário logando no sistema')

    res.send('Log salvo!!!')

})

//Middlewares a nível de aplicativo

app.listen(3000, () => console.log('Server running at port 3000'))