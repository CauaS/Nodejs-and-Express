const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

//endpoints

//http://localhost:3000/?name=Caligiuri&age=23

router.get('/', auth, (req, res) => {
    const { name, age } = req.query;
    console.log(res.locals.auth_data);

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