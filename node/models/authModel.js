const connection = require('../database/db')


const register = (name, email, password) => {
    return new Promise((resolve, reject)=>{
        const addSql = "email = ?"
        connection.query(addSql, [name, email, password], (err, result)=>{
            if(err){
                console.log('[REGISTER ERROR] - ', err.message)
            }else{
                console.log('SE REGISTRO')
                resolve(true)
            }
        })
    })
}

//mejorar, y verificar si ya funciona
const obtainEmail = (email) => {
    return new Promise((resolve, reject)=>{
        const addSql = "email = ?"
        connection.query(addSql, [email], (err, result)=>{
            if(err){
                console.log('[ERROR NO SE ENCONTRO] - ', err.message)
            }else{
                if (result.length === 0) {
                    // Si no se encontró un email con el email proporcionado, rechaza la promesa
                    reject(new Error('Email no encontrado'));
                } else {
                    console.log('Email obtenida');
                    // Resuelve la promesa con la email encontrada
                    resolve(result[0].password);
                }
            }
        })
    })
}

const obtainPass = (email) => {
    return new Promise((resolve, reject)=>{
        //comando sql mejorar
        const addSql = "SELECT password FROM users WHERE email = ?"
        connection.query(addSql, [email], (err, result)=>{
            if(err){
                console.log('[ERROR AL OBTENER PASS] - ', err.message);
                reject(err);
            }else{
                if (result.length === 0) {
                    // Si no se encontró un usuario con el email proporcionado, rechaza la promesa
                    reject(new Error('Usuario no encontrado'));
                } else {
                    console.log('Password obtenida');
                    // Resuelve la promesa con la contraseña encontrada
                    resolve(result[0].password);
                }
            }
        })
    })
}

module.exports = { obtainPass, register, obtainEmail }