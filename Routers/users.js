const express = require('express');
const router = express.Router();

const users = require('../model/user');

const jwt = require('jsonwebtoken');

const config = require('../config/setting');
const { jwtPass, jwtExpiresIn } = config;

//This function is going to help to create tokens

const createUserToken = (userId) => {

    // First param :This token is gonna be created based on userId
    // Sec. param: A password
    //Third param: Token's expiration date
    return jwt.sign({ id: userId }, jwtPass, { expiresIn: jwtExpiresIn });
}

//const bcrypt = require('bcrypt');

//endpoints

//http://localhost:3000/?name=Caligiuri&age=23

router.get('/', async (req, res) => {

    console.log(req.body);
    
    try {
        const all_users = await users.find({});
        
        return res.send(all_users);

    }catch(e){
        return res.status(500).send({ error: 'Erro na consulta de usuários' })
    }
});

router.post('/create', async (req, res) => {
    const { email, password } = req.body;

    console.log(email, password);

    if(!email || !password){
        return res.status(400).send({ 
            message: 'Dados insuficientes!',
        });
    }

    try {
        await users.findOne({ email }) ? res.status(400).send({ erro: 'Usuário ja registrado!'}) : null;

        const data = await users.create(req.body);

        data.password = undefined; // nao revelar a senha do usuário
        
        return res.status(201).send({ data ,  token: createUserToken(data.id)});

    }catch(e){
        return res.status(500).send({ erro: 'Erro ao buscar usuário!'})        
    }
});
/*
router.post('/auth', async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).send({ error: 'Dados Insuficiente!'});
    }
    try {
        const data = await users.findOne({ email }).select(+password);
        !data ?  res.status(400).send({ error: 'Usuário não registrado!'}) : null;

        const pass_ok = await bcrypt.compare(password, data.password);
        !pass_ok ?  res.status(401).send({ erro: 'Senha incorreta' }) : null;

        data.password = undefined;

        return res.send({ data ,  token: createUserToken(data.id)});
    }catch(e) {
        return res.status(500).send({ error: 'Erro a buscar usuário!'});
    }
});
*/

module.exports = router;