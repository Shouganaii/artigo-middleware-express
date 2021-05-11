const express = require('express');
const app = express()


app.use((req, _res, next) => {
    req.isAdmin = false
    next()
})

const proibeVisitante = (req, res, next) => {
    if (req.isAdmin == true) {
        next()
    } else {
        res.send('Acesso negado')
    }
}

app.get('/liberado', (req, res) => {
    res.send('Acesso permitido')
})

app.get('/proibido', proibeVisitante, (req, res) => {
    res.send('Acesso permitido')
})

app.listen(3000, () => console.log('Server running at port 3000'))