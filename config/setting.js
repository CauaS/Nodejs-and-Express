const env = process.env.NODE_ENV || 'dev';

//in orde to change the end, open the cmd and tip set NODE_ENV = 'pro' or 'hml'....

const config = () => {
    switch(env) {
        case 'dev': return {
            bdURL: 'mongodb+srv://cali:cali123@api-rest-didwk.mongodb.net/test?retryWrites=true&w=majority',
            jwtPass: 'k11sgknd',
            jwtExpiresIn: '7d'
        }
        case 'hml': return {
            bdURL: 'mongodb+srv://cali:cali123@api-rest-didwk.mongodb.net/test?retryWrites=true&w=majority',
            jwtPass: 'k11sgknd',
            jwtExpiresIn: '7d'
        }
        case 'prod': return {
            bdURL: 'mongodb+srv://cali:cali123@api-rest-didwk.mongodb.net/test?retryWrites=true&w=majority',
            jwtPass: 'k11sgknd',
            jwtExpiresIn: '7d'
        }
    } 
}

console.log(`Iniciando a API  em ambiente ${env.toUpperCase()}`);


module.exports = config();