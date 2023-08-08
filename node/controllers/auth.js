const path = require('path');
//const database = require('../models/db.requests')
const { encrypt, compare } = require('../helpers/handleBcrypt')
const { obtainPass, obtainEmail, register } = require('../models/authModel')
const jwt = require('jsonwebtoken')


const registerCtrl = async (req, res) => {
    try {
        
        const { firtname, lastname, email, password } = req.body
        console.log(firtname, lastname, email)
        // const passwordhash = await encrypt(password)
        // const checkRegist = await register(firtname, lastname, email, password)
        // if(checkRegist){
        //     res.send({ 
        //         redirect: '/',
        //         token: passwordhash //crear un token y pasarlo
        //     })
        // }
        res.send({ 
            redirect: '/',
            // token: passwordhash //crear un token y pasarlo
        })

    }catch{
        res.status(404)
        res.send({error: 'Error no puede registrarse'})
    }
}

const loginCtrl = async (req, res) => {
    try {
        const { email, password} = req.body
        console.log(email, password)
            //obtener el email y verificar si tambien bien es por las dudas
        // const passObtaiDB = await obtainPass(email);
        // if(!passObtaiDB){
        //     res.status(404)
        //     res.send({error: 'Password not found'})
        // }
        //const checkPassword = await compare(password, passObtaiDB)
            //Si el usuario es autenticado exitosamente, generar un token
        //const user = { id: userId, username: username }; // Datos del usuario que desees incluir en el token
        const user = { id: '23', username: 'username' }; //borrar despues
        const secretKey = 'tu_clave_secreta'; // Clave secreta para firmar el token (puede ser cualquier string)

        const token = jwt.sign(user, secretKey, { expiresIn: '1h' }); // El token expirará en 1 hora
        console.log('este es el token ' + token)
        // if (checkPassword){
        //     res.send({
        //         redirect: '/',
        //         token: token
        //     })
        // }
        res.send({
            redirect: '/',
            token: token
        })

    }catch{
        res.status(404)
        res.send({error: 'No se puedo logearse'})
    }
}

module.exports = {loginCtrl, registerCtrl}