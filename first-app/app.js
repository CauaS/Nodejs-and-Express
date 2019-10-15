const EventEmitter = require('events');

const Logger = require('./logger');

const logger = new Logger();


//adding a listener do raised de messageLogged
logger.on('messageLogged',  (e) => {
    console.log('Listener Called', e.id );
})


logger.consoleName('Cali');

console.log(__filename);
console.log(__dirname);
//***************************************************************
//sysmtem operation
const os = require('os');

console.log(os.freemem());
console.log(os.totalmem());

//****************************************************************
// files system
const fs = require('fs');

// de mandeira sincrona
//const files = fs.readdirSync('./');
//console.log(files);

// de maneira assincrona
fs.readdir('./', (err, files) => {
    err ? console.log(`Erro = `, err) : console.log('Result = ', files);
})
//*************************************************************************