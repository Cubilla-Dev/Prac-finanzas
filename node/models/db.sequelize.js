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
    timestamps: false // Agrega esta opción para desactivar las columnas createdAt y updatedAt
});

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
    timestamps: false // Agrega esta opción para desactivar las columnas createdAt y updatedAt
});

//const GetSidebar = db_sequelize.findAll()

module.exports = {
    SetBlog,
    SetComment,
    //GetSidebar,
};
