const express = require('express')
const app = express()
const cors = require('cors');
const router = require('./routers/router')
const routerAuth = require('./routers/routerAuth')

//Routers
const blogContextRouter = require('./routers/blogContextRouter')
const blogFormRouter = require('./routers/blogFormRouter')
const commentRouter = require('./routers/commentRouter')
const sidebarRouter = require('./routers/sidebarRouter')
const smallBlogRouter = require('./routers/smallBlogRouter')


const db_sequelize = require('./database/sequelizeConfig');  // Asegúrate de que la ruta sea correcta

// ... aquí importas tus rutas y otros middleware

// Sincroniza la base de datos con los modelos
db_sequelize.sync()
    .then(() => {
        console.log('Base de datos sincronizada correctamente');
    })
    .catch(error => {
        console.error('Error al sincronizar la base de datos:', error);
    });
app.use(express.json())

//mejorar para que sea mas seguro
app.use(cors()); 

app.use(routerAuth)
app.use(router)
app.use('/blog', blogContextRouter)
app.use('/blog', blogFormRouter)
app.use('/blog', commentRouter)
app.use('/blog', sidebarRouter)
app.use(smallBlogRouter)

app.listen(3000, ()=> console.log('listening on port 3000'))
