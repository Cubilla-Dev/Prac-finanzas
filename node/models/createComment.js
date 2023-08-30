const { DataTypes } = require('sequelize');
const db_sequelize = require('../database/sequelizeConfig');

const SetComment = db_sequelize.define('comments', {
    comment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
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


module.exports = SetComment;
