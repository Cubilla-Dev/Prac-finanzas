const path = require('path');
const { encrypt, compare } = require('../helpers/handleBcrypt')
const { obtainPass, obtainEmail, register } = require('../models/authModel')
const jwt = require('jsonwebtoken')
const { Register } = require('../models/authRegister');
const { where } = require('sequelize'); ///no se que es

//reparar todavia
const registerCtrl = async (req, res) => {
    try {
        
        const { name, email, password } = req.body
        const passwordhash = await encrypt(password)
        const checkRegist = await Register.create(
            {
                name: name,
                email: email,
                password: passwordhash
            }
        )
        if(checkRegist){
                // Si el usuario es autenticado exitosamente, generar un token
            const secretKey = 'tu_clave_secreta'; // Clave secreta para firmar el token (puede ser cualquier string)
            const user = {id: name}
            const token = jwt.sign(user, secretKey, { expiresIn: '1h' }); // El token expirará en 1 hora
            res.status(200).json({
                redirect: '/',
                token: token,
            })
        }

    }catch{
        res.status(404).json({error: 'Error no puede registrarse'})    }
}

const loginCtrl = async (req, res) => {
    try {
        const { email, password} = req.body
            // obtener el email y verificar si tambien bien es por las dudas
        console.log(password)
        // const {user_id, passObtaiDB} = await obtainPass(email);
        const data = await Register.findOne({
            where: {
                email: email
            }
        })      
        console.log('Esto es data ', data[0].password) //data.dataValues.password
        // if(!passObtaiDB){
        //     res.status(404)
        //     res.send({error: 'Password not found'})
        // }
        // const checkPassword = await compare(password, passObtaiDB)
        // if (checkPassword){
        //         // Si el usuario es autenticado exitosamente, generar un token
        //     const secretKey = 'tu_clave_secreta'; // Clave secreta para firmar el token (puede ser cualquier string)
        //     const user = {id: user_id}
        //     const token = jwt.sign(user, secretKey, { expiresIn: '1h' }); // El token expirará en 1 hora
        //     res.send({
        //         redirect: '/',
        //         token: token
        //     })
        // }
    }catch{
        res.status(404)
        res.send({error: 'No se puedo logearse'})
    }
}

module.exports = {loginCtrl, registerCtrl}




//una peticion de muchos a muchos

// const Estudiante = require('./models/Estudiante');
// const Curso = require('./models/Curso');

// Curso.findOne(idCurso, {
//   include: {
//     model: Estudiante,
//     through: 'Inscripciones' // Nombre de la tabla pivote
//   }
// })
// .then(curso => {
//   if (!curso) {
//     throw new Error('Curso no encontrado');
//   }
//   console.log(Estudiantes inscritos en el curso ${curso.nombre}:);
//   curso.Estudiantes.forEach(estudiante => {
//     console.log(- ${estudiante.nombre});
//   });
// })
// .catch(error => {
//   console.error('Error:', error);
// });