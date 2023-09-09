const { DataTypes } = require('sequelize');
const db_sequelize = require('../database/sequelizeConfig');
//falta crear
const Blog = require('../models/createBlog')
const User = require('../models/authRegister')


const db_likes = db_sequelize.define('likes', {
    like_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    blog_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Blog,
            key: blog_id
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: user_id
        }
    },
}, {
    timestamps: false 
});

Blog.belongsTo(User, { foreignKey: 'user_id' }) //uno a muchos
User.belongsToMany(Blog, { through: db_likes, foreignKey: 'blog_id' })  //muchos a muchos


module.exports = db_likes;