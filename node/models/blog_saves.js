const { DataTypes } = require('sequelize');
const db_sequelize = require('../database/sequelizeConfig');
const Blog = require('../models/createBlog')
const User = require('../models/authRegister')


const BlogSaves = db_sequelize.define('blog_saves', {
    blog_save_id: {
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


User.belongsToMany(Blog, { through: BlogSaves, foreignKey: 'user_id' }); //muchos a muchos
Blog.belongsToMany(User, { through: BlogSaves, foreignKey: 'blog_id' }); //muchos a muchos

module.exports = BlogSaves;