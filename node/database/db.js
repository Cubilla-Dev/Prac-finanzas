const mysql = require('mysql')
//crear un ususario 
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'test',
    user: 'test',
    password: '',
})

module.exports = connection