const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token_header = req.headers.auth;

    //if token doesn't exist
    if(!token_header){
        return res.send({ error: 'Autentificação Negada!'});
    } 

    jwt.verify(token_header, 'k11sgknd', (err, decoded) => {

        res.locals.auth_data = decoded;

        //if an erro come out send error, else everything is good so next();
        return err ? res.send({ error: 'Token Inválido'}) : next();

    })
}


module.exports = auth;