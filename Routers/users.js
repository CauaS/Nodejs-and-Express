const express = require('express');
const router = express.Router();

//endpoints

//http://localhost:3000/?name=Caligiuri&age=23

router.get('/', (req, res) => {
    const { name, age } = req.query;

    return res.send({ 
        message: `Tudo ok com a rota dos usuários`, 
        name: name, 
        age: age
    });
})

router.post('/', (req, res) => {
    return res.send({ message: 'Metodo post usuarios'})
})

router.post('/create', (req, res) => {
    return res.send({
        message: 'ok create'
    })
})

module.exports = router;