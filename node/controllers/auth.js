const path = require('path');
//const database = require('../models/db.requests')
const { encrypt, compare } = require('../helpers/handleBcrypt')
const { obtainPass, obtainEmail, register } = require('../models/authModel')


const registerCtrl = async (req, res, next) => {
    try {
        
        const { name, email, password } = req.body
        const passwordhash = await encrypt(password)
        const checkRegist = await register(name, email, password)
        if(checkRegist){
            res.send({ 
                data: 'se registro correctamente',
                token: passwordhash //crear un token y pasarlo
            })
        }

    }catch{
        res.status(404)
        res.send({error: 'Error no puede registrarse'})
    }
}

const loginCtrl = async (req, res, next) => {
    try {
        const { email, password} = req.body
        //obtener el email y verificar si tambien es por las dudas
        const passObtaiDB = await obtainPass(email);
        if(!passObtaiDB){
            res.status(404)
            res.send({error: 'Password not found'})
        }
        const checkPassword = await compare(password, passObtaiDB)
        if (checkPassword){
            res.send({
                data: passObtaiDB,
                token: 'dfgdfgd'
            })
        }

    }catch{
        res.status(404)
        res.send({error: 'No se puedo logearse'})
    }
}

module.exports = {loginCtrl, registerCtrl}