const path = require('path');
//const database = require('../models/db.requests')
const { encrypt, compare } = require('../helpers/handleBcrypt')
const { obtainPass, obtainEmail, register } = require('../models/authModel')
const jwt = require('jsonwebtoken')
const { Register } = require('../models/authSequelize')


const registerCtrl = async (req, res) => {
    try {
        
        const { name, email, password } = req.body
        console.log('DATOS RECIBIDOS YA ', name, email)
        const passwordhash = await encrypt(password)
        const checkRegist = await Register(
            {
                name: name,
                email: email,
                password: passwordhash
            }
        )
        console.log("VER QUE DATOS DEVUEVE",checkRegist)
        if(checkRegist){
                // Si el usuario es autenticado exitosamente, generar un token
            const secretKey = 'tu_clave_secreta'; // Clave secreta para firmar el token (puede ser cualquier string)
            const user = {id: name}
            const token = jwt.sign(user, secretKey, { expiresIn: '1h' }); // El token expirará en 1 hora
            res.send({
                redirect: '/',
                token: token
            })
        }

    }catch{
        res.status(404)
        res.send({error: 'Error no puede registrarse'})
    }
}

const loginCtrl = async (req, res) => {
    try {
        const { email, password} = req.body
            // obtener el email y verificar si tambien bien es por las dudas
        console.log(password)
        const {user_id, passObtaiDB} = await obtainPass(email);
        if(!passObtaiDB){
            res.status(404)
            res.send({error: 'Password not found'})
        }
        const checkPassword = await compare(password, passObtaiDB)
        if (checkPassword){
                // Si el usuario es autenticado exitosamente, generar un token
            const secretKey = 'tu_clave_secreta'; // Clave secreta para firmar el token (puede ser cualquier string)
            const user = {id: user_id}
            const token = jwt.sign(user, secretKey, { expiresIn: '1h' }); // El token expirará en 1 hora
            res.send({
                redirect: '/',
                token: token
            })
        }
    }catch{
        res.status(404)
        res.send({error: 'No se puedo logearse'})
    }
}

module.exports = {loginCtrl, registerCtrl}