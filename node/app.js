const express = require('express')
const app = express()
const cors = require('cors');
const router = require('./routers/router')
const auth = require('./routers/auth')


app.use(express.json())

// Configura CORS para permitir solicitudes desde http://127.0.0.1:5173
// app.use(cors({
//     origin: 'http://127.0.0.1:5173',
// }));

//mejorar para que sea mas seguro
app.use(cors()); 


app.use(auth)
app.use(router)



app.listen(3000, ()=> console.log('listening on port 3000'))
