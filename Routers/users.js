const express = require('express');
const router = express.Router();

const users = require('../model/user');

//endpoints

//http://localhost:3000/?name=Caligiuri&age=23

router.get('/', (req, res) => {
   
    users.find({}, (err, data)=>{
        if(err) {
            return res.send({ error: 'Erro na consulta de usuários'})
        }

        return res.send(data);
    })
});

router.post('/create', (req, res) => {

    const { email, password } = req.body;

    if(!email || !password){
        return res.send({ 
            message: 'Dados insuficientes!'
        })
    }

    users.findOne({ email }, (err, data) => {

        if(err) {
            return res.send({ erro: 'Erro ao buscar usuário!'})
        }

        if(data) {
            return res.send({ erro: 'Usuário ja registrado!'})
        }

        users.create(req.body, (err, data) => {
            if(err) {
                return res.send({ erro: 'Erro ao criar usuário!' })
            }
            
            data.password = undefined; // nao revelar a senha do usuário

            return res.send(data);
        });
    });
});

module.exports = router;