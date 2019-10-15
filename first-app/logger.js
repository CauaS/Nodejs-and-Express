const EventEmitter = require('events');

//*************************************************************************
//function

class Logger extends EventEmitter {
    consoleName(name){
        console.log(`Olá ${name}`);
    
        //raised and event
        // id and url sao event argumnets
        this.emit('messageLogged',  {
            id: 1,
            url: 'http://'
        });
    }
}



//************************************************************************

module.exports = Logger;