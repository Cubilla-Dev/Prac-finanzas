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

//REPARAR
//para agregar un comentario a un blog
controller.commentForm = (req, res) => {
    try {   
        const { title_blog, comment_blog } = req.body
        console.log( title_blog, comment_blog)
        database.setComment(user_id = 1, title_blog, comment_blog)
        res.send('valor recibido')

    }catch{
        console.log('error al recibir los datos')
    }
}

//para guardar los blogs escritos
controller.setForm = (req, res) => {
    try {   
        const { title_blog, body_blog } = req.body
        console.log( title_blog, body_blog)
        database.setBlog(title_blog, body_blog)
        res.send('valor recibido')

    }catch{
        console.log('error al recibir los datos')
    }
}


//para enviar el blog completo
controller.blogContex = (req, res) =>{
    try{
        const id = req.params.id
        database.getBlog(id)
            .then((result) => {
                res.json(result)
            })
            .catch((error) => {
                console.error('Error al obtener los datos de blogs ', error)
            })
    }catch{
        console.log('error al conseguir la id')
    }
}

//para enviar al smallblog
controller.getSmallBlog = (req, res) => {
    try {   
        database.getSmallBl()
            .then((result) => {
                //enviado a front
                res.json(result)
            })
            .catch((error) => {
                console.error('Error al recibir los datos de la db ',error)
            })

    }catch{
        console.log('error al recibir los datos ')
    }
}


module.exports = controller