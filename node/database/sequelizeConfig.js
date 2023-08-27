const { Sequelize } = require('sequelize')

//Configuracion de base de datos
const db_sequelize = new Sequelize('finanzas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
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