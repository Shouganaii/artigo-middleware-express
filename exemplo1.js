const express = require('express');
const app = express()

app.get('/',
    (req, _res, next) => {
        req.numero = 0
        next()
    },
    (req, _res, next) => {
        req.numero = 1
        next()
    },
    (req, res) => {
        console.log(req.numero)
        res.status(200).send('Tudo certo!')
    })

app.listen(3000, () => console.log('Server running at port 3000'))