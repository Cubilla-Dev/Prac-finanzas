const { DataTypes } = require('sequelize');
const db_sequelize = require('../database/sequelizeConfig');
//falta crear
const categorys = require('../models')
const likes = require('../models')


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
    },
    like_id: {
        type: DataTypes.INTEGER,
        references: {
            model: likes,
            key: like_id
        }
    },
    cate_id: {
        type: DataTypes.INTEGER,
        references: {
            model: categorys,
            key: cate_id
        }
    }
}, {
    timestamps: false 
});

SetBlog.hasMany(likes, { foreignKey: 'like_id' }) //uno a muchos
SetBlog.belongsTo(categorys, { foreignKey: 'cate_id' })  //muchos a muchos


module.exports = SetBlog;