const express = require('express');

//app recebe o express
const app = express();

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