const { DataTypes } = require('sequelize');
const db_sequelize = require('../database/sequelizeConfig');

const SetBlog = db_sequelize.define('blogs', {
    blog_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
    },
    body: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: false 
});


module.exports = SetBlog;