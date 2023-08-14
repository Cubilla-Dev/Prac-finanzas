const createPDF = require('../container/createPdf')
const path = require('path');
const database = require('../models/db.requests')
const controller = {}



controller.presForm  = (req, res) => {
    try{
        const {name, age} = req.body
        createPDF(name, age)
        res.send('valor recibido')
    }catch{
        res.send('error al recibir los datos')
    }
}

//para descargar el pdf de presupuesto
controller.dowlPDF = (req, res) => {
    try{
        //tiene que ser dinamico
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

//para agregar un comentario a un blog
controller.commentForm = (req, res) => {
    try {   
        const {titleToSave, comment } = req.body
        console.log(titleToSave, comment)
        database.setComment(titleToSave, comment)
        res.send('valor recibido')

    }catch{
        console.log('error al recibir los datos')
    }
}

module.exports = controller