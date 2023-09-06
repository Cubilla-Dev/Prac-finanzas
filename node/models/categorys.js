const { DataTypes } = require('sequelize');
const db_sequelize = require('../database/sequelizeConfig');

const Category = db_sequelize.define('categorys', {
    cate_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cate_name: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: false 
});


module.exports = Category;






