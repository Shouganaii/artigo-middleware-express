const express = require('express');
const morgan = require('morgan');
const app = express()
const router1 = express.Router();
const router2 = express.Router();

router1.use((req, res, next) => {
    req.propriedade = 'Eu só existo dentro do router1!'
    next()
})

router1.get('/', (req, res) => {
    console.log(req.propriedade)//Eu só existo dentro do router1!

    res.send('Ok!!!')
})

router2.get('/', (req, res) => {
    //propriedade não existe nesse router
    console.log(req.propriedade)//undefined
    res.send('Ok!!!')
})

//Middlewares a nível de aplicativo
app.use(express.json())
app.use(morgan('tiny'))
app.use('/router1', router1)
app.use('/router2', router2)

app.listen(3000, () => console.log('Server running at port 3000'))