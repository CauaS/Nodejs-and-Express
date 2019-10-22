const express = require('express');
const router = express.Router();

const users = require('../model/user');

//const bcrypt = require('bcrypt');

//endpoints

//http://localhost:3000/?name=Caligiuri&age=23

router.get('/', async (req, res) => {
    try {
        const all_users = await users.find({});
        
        return res.send(all_users);

    }catch(e){
        return res.send({ error: 'Erro na consulta de usuários' })
    }
});

router.post('/create', async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password){
        return res.send({ 
            message: 'Dados insuficientes!'
        });
    }

    try {
        await users.findOne({ email }) ? res.send({ erro: 'Usuário ja registrado!'}) : null;

        const data = await users.create(req.body);

        data.password = undefined; // nao revelar a senha do usuário
        return res.send(data);

    }catch(e){
        return res.send({ erro: 'Erro ao buscar usuário!'})        
    }
});
/*
router.post('/auth', async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password){
        return res.send({ error: 'Dados Insuficiente!'});
    }
    try {
        const data = await users.findOne({ email }).select(+password);
        !data ?  res.send({ error: 'Usuário não registrado!'}) : null;

        const pass_ok = await bcrypt.compare(password, data.password);
        !pass_ok ?  res.send({ erro: 'Senha incorreta' }) : null;

        data.password = undefined;

        return res.send(data);
    }catch(e) {
        return res.send({ error: 'Erro a buscar usuário!'});
    }
});
*/

module.exports = router;