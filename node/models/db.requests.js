const connection = require('../database/db')

//una peticion vacia
// const getBlog = () =>{
//     const sql = 'SELECT * FROM finanzas'
//     connection.query(sql, (err, result)=>{
//         if(err){console.error(err)}
//         else{
//             console.log(result)
//         }
//     })
// }

// const logeo = (email, password) => {
//     return new Promise((resolve, reject)=>{
//         const addSql = "email = ?"
//         connection.query(addSql, [email, password], (err, result)=>{
//             if(err){
//                 console.log('[LOGEO ERROR] - ', err.message)
//             }else{
//                 console.log('se logeo')
//                 // resolve('eliminado')
//             }
//         })
//     })
// }

const setComment = (title, comment) =>{
    return new Promise((resolve, reject)=>{
        const addSql = 'INSERT INTO comments (title_blog, comment) VALUES (?, ?)';
        connection.query(addSql, [title, comment], (err, result)=>{
            if(err){
                console.log('[COMMENT ERROR] - ', err.message)
            }else{
                console.log('Se registro el comentario')
            }
        })
    })
}

module.exports = {
    setComment
}