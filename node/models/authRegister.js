const { DataTypes } = require('sequelize');
const db_sequelize = require('../database/sequelizeConfig');

const Register = db_sequelize.define('registrations', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: false // Agrega esta opción para desactivar las columnas createdAt y updatedAt
});


module.exports = Register