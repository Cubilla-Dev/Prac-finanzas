const express = require('express')
const app = express()
const cors = require('cors');
const router = require('./routers/router')
const routerAuth = require('./routers/routerAuth')

const db_sequelize = require('./database/sequelizeConfig');  // Asegúrate de que la ruta sea correcta
const SetBlog = require('./models/db.sequelize'); // Asegúrate de que la ruta sea correcta

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

// Configura CORS para permitir solicitudes desde http://127.0.0.1:5173
// app.use(cors({
//     origin: 'http://localhost:5173/'

// }));

//mejorar para que sea mas seguro
app.use(cors()); 

// app.use((req, res, next) => {
//     res.append('Access-Control-Allow-Origin', 'http://localhost:5173'); 
//     res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     next();
// });

// app.use(cors({
//     origin: 'http://localhost:5173',
//     methods: ['GET', 'PUT', 'POST', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'] // Agrega 'Authorization' si es necesario
// }));

app.use(routerAuth)
app.use(router)



app.listen(3000, ()=> console.log('listening on port 3000'))
