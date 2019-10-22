const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');

const userSchema =  new Schema({
    email: {
        type: String,
        required: true,
        unique: true, //como se fosse a PK 
        lowercase: true // sempre minusculo
    },
    password: {
        type: String, 
        required: true, 
        select: false // esse campo nao retornará em buscas pelos usuários
    }, 
    created: {
        type: Date, 
        default:  Date.now // como esse campo não sera setado, o valor default de inserção é date.now
    }
});
// Function sempre executará antes de salvar;
/*
userSchema.pre('save', async function(next){
    let user = this;

    if(!user.isModified('password')){
        return next();
    }
    user.password =  await bcrypt.hash(user.password, 10);

    return next();
});
*/

module.exports = model('users', userSchema);
