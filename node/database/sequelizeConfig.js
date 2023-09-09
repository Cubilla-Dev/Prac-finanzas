const { Sequelize } = require('sequelize')
const config = require('../config')
require('dotenv').config()

//Configuracion de base de datos
const db_sequelize = new Sequelize(
    config.db.name, config.db.user, config.db.pass, {
    host: config.db.host,
    dialect: 'mysql',
    port: config.db.port,
})

//Prueba de conexion
db_sequelize
    .authenticate()
    .then(()=>{
        console.log('Conexion a la base de datos extablecida correctamente')
    })
    .catch((error)=>{
        console.error('No se conecto a la base de datos ', error)
    })


module.exports = db_sequelize