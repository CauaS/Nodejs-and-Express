const jwt = require('jsonwebtoken');

const config = require('../config/setting');
const { jwtPass } = config;

const auth = (req, res, next) => {
    const token_header = req.headers.auth;

    //if token doesn't exist
    if(!token_header){
        return res.status(401).send({ error: 'Autentificação não enviado!'});
    } 

    jwt.verify(token_header, jwtPass, (err, decoded) => {

        res.locals.auth_data = decoded;

        //if an erro come out send error, else everything is good so next();
        return err ? res.status(401).send({ error: 'Token Inválido'}) : next();

    })
}


module.exports = auth;