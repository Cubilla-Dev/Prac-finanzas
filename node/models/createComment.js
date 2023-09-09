const { DataTypes } = require('sequelize');
const db_sequelize = require('../database/sequelizeConfig');
const Usuario = require('../models/authRegister')

const SetComment = db_sequelize.define('comments', {
    comment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: user_id
        }
    },
    title_blog: {
        type: DataTypes.STRING,
    },
    comment_blog: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: false 
});

//definir las relaciones de comentario cn usuario
SetComment.belongsTo(Usuario, { foreignKeys: 'user_id' })

module.exports = SetComment;






