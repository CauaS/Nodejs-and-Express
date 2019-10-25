const express = require('express');

//app recebe o express
const app = express();

//instancia do mongoose
const mongoose = require('mongoose');

//body parser para o POST
const bodyParser = require('body-parser');

//string de conexão
const url = 'mongodb+srv://cali:cali123@api-rest-didwk.mongodb.net/test?retryWrites=true&w=majority';

const options = { 
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500, 
    poolSize: 5,
    useNewUrlParser: true,
}

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);


mongoose.connection.on('connected', () => {
    console.log('Conectado!');
})
//mosntra erro
mongoose.connection.on('error', err => {
    console.log(`Erro na conexão: ${err}`);
})
//evento de desconeção
mongoose.connection.on('disconnected', () => {
    console.log(`Aplicação desconectada:`);
})


//configuração o body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//instancia os files
const indexRouter = require ('./Routers/index');
const usersRouter = require ('./Routers/users');

//quando chegar no '/' chama indexRoute;
//quando chegar no '/users' chama usersRouter;
app.use('/', indexRouter);
app.use('/users', usersRouter);


//escuta a porta
app.listen(3000);

module.exports = app;