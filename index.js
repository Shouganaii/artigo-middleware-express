const express = require('express');
const app = express()

app.get('/', (req, res, next) => {
    res.status(200).send('Tudo certo!')
})

app.listen(3000, () => console.log('Server running at port 3000'))