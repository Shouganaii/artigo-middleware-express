const express = require('express');
const app = express()


app.use((req, res, next) => {
    const isAdmin = req.isAdmin
    
    if (isAdmin) {
        next()
    } else {
        res.send('Acesso negado')
    }
})

app.get('/', (req, res) => {

    res.send('Acesso permitido')

})

//Middlewares a nível de aplicativo

app.listen(3000, () => console.log('Server running at port 3000'))