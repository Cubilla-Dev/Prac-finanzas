const mysql = require('mysql')
//crear un ususario 
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'finanzas',
    user: 'root',
    password: '',
})

module.exports = connection