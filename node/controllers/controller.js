const createPDF = require('../container/createPdf')
const path = require('path');
const database = require('../models/db.requests')
const controller = {}

controller.index = (req, res) => {
    res.send('hola mundo')
}

controller.presForm  = (req, res) => {
    try{
        const {name, age} = req.body
        createPDF(name, age)
        res.send('valor recibido')
    }catch{
        res.send('error al recibir los datos')
    }
}

controller.dowlPDF = (req, res) => {
    try{
        const filepath = path.join(__dirname, '../pdfs/presupuesto.pdf')
        res.sendFile(filepath, (error) => {
            if(error){
                console.error('Error al enviar el archivo PDF:', error);
                res.status(500).send('Error al descargar el archivo PDF');
            }
        })
    }catch{
        res.status(500).send('Error no se puedo ingresar al directorio');
    }
}

controller.logeo = (req, res) => {
    try {
        const {name, password} = req.body
        database.logeo(name, password)
        res.redirect('home')
    }catch{

    }
}

module.exports = controller