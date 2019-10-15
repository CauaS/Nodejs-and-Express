const express = require('express');
const router = express.Router();

//endpoints

//http://localhost:3000/?name=Caligiuri&age=23

router.get('/', (req, res) => {
    const { name, age } = req.query;

    return res.send({ 
        message: `Tudo ok com a rota do index`, 
        name: name, 
        age: age
    });
})

router.post('/', (req, res) => {
    return res.send({ message: 'Metodo post index' })
})



module.exports = router;