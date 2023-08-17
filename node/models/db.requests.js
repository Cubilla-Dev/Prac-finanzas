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

const setComment = (user_id, title, comment) =>{
    return new Promise((resolve, reject)=>{
        const addSql = 'INSERT INTO comments (user_id, title_blog, comment_blog) VALUES (?, ?, ?)';
        connection.query(addSql, [user_id, title, comment], (err, result)=>{
            if(err){
                console.log('[COMMENT ERROR] - ', err.message)
            }else{
                console.log('Se registro el comentario')
            }
        })
    })
}

//se hara modificaciones a la db y tendre que cambiar esto tambien
const setBlog = (title, body) =>{
    return new Promise((resolve, reject)=>{
        const addSql = 'INSERT INTO blogs (title, body) VALUES (?, ?)';
        connection.query(addSql, [title, body], (err, result)=>{
            if(err){
                console.log('[COMMENT ERROR] - ', err.message)
            }else{
                console.log('Se registro el comentario')
            }
        })
    })
}

const getSmallBl = () =>{
    return new Promise((resolve, reject)=>{
        const addSql = 'SELECT * FROM blogs';
        connection.query(addSql, (err, result)=>{
            if(err){
                console.log('[SELECT ERROR] - ', err.message)
            }else{
                //devolvemos una promesa con todo los datos
                resolve(result)
            }
        })
    })
}


module.exports = {
    setComment,
    setBlog,
    getSmallBl
}