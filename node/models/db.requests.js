const connection = require('../database/db')

//una peticion vacia
const getData = () =>{
    const sql = 'SELECT * FROM finanzas'
    connection.query(sql, (err, result)=>{
        if(err){console.error(err)}
        else{
            console.log(result)
        }
    })
}

const logeo = (email, password) => {
    return new Promise((resolve, reject)=>{
        const addSql = "email = ?"
        connection.query(addSql, [email, password], (err, result)=>{
            if(err){
                console.log('[LOGEO ERROR] - ', err.message)
            }else{
                console.log('se logeo')
                // resolve('eliminado')
            }
        })
    })
}

module.exports = {
    logeo
}