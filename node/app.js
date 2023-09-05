const express = require('express')
const app = express()
const cors = require('cors');

//ROUTERS
const router = require('./routers/router')
const routerAuth = require('./routers/routerAuth')
const blogContextRouter = require('./routers/blogContextRouter')
const smallBlogRouter = require('./routers/smallBlogRouter')
const formRouter = require('./routers/formRouter')
const commentRouter = require('./routers/commentRouter')


const db_sequelize = require('./database/sequelizeConfig');  

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
app.use(blogContextRouter)
app.use(smallBlogRouter)
app.use(formRouter)
app.use(commentRouter)


app.listen(3000, ()=> console.log('listening on port 3000'))
