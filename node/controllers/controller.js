const createPDF = require('../container/createPdf')
const path = require('path');

const SetComment = require('../models/createComment')
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

//REPARAR falta que se le pase el id todavia
//para agregar un comentario a un blog
// controller.commentForm = (req, res) => {
//     try {   
//         const { title_blog, comment_blog } = req.body
//         console.log( title_blog, comment_blog)
//         SetComment.create({
//             user_id: 1,
//             title_blog: title_blog,
//             comment_blog: comment_blog
//         })
//             .then(() => {
//                 res.json({ message: 'Comentario registrado exitosamente' });
//             })
//             .catch(error => {
//                 console.error('Error al registrar comentario:', error);
//                 res.status(500).json({ message: 'Error al registrar comentario' });
//             });

//     }catch{
//         console.log('error al recibir los datos')
//     }
// }

//pasare a sequelize
//para guardar los blogs escritos
// controller.setForm = (req, res) => {
//     try {   
//         const { title, body } = req.body;
//         console.log('Este es setForm datos recibidos ', title, body);
//         SetBlog.create({
//             title: title,
//             body: body
//         })
//             .then(() => {
//                 res.json({ message: 'Blog registrado exitosamente' });
//             })
//             .catch(error => {
//                 console.error('Error al registrar blog:', error);
//                 res.status(500).json({ message: 'Error al registrar blog' });
//             });
//     } catch {
//         console.log('error al recibir los datos');
//     }
// };



//para enviar el blog completo
// controller.blogContex = (req, res) =>{
//     try{
//         const id = req.params.id
//         //database.getBlog(id)
//         SetBlog.findByPk(id)
//             .then((result) => {
//                 res.json([result])
//             })
//             .catch((error) => {
//                 console.error('Error al obtener los datos de blogs ', error)
//             })
//     }catch{
//         console.log('error al conseguir la id')
//     }
// }

//para enviar al smallblog
// controller.getSmallBlog = (req, res) => {
//     try {   
//         SetBlog.findAll()
//             .then((result) => {
//                 //enviado a front
//                 res.json(result)
//             })
//             .catch((error) => {
//                 console.error('Error al recibir los datos de la db ',error)
//             })

//     }catch{
//         console.log('error al recibir los datos ')
//     }
// }

//no esta hecha todavia
//para enviar data y recibir sidebar
controller.getSidebar = (req, res) => {
    try {   
        //database.getSidebar()
        // SetBlog.findAll()
        //     .then((result) => {
        //         //enviado a front
        //         res.json(result)
        //     })
        //     .catch((error) => {
        //         console.error('Error al obtener datos:', error);
        //         res.status(500).json({ message: 'Error al obtener datos' });
        //     })

    }catch{
        console.log('error al enviar los datos ')
    }
}

module.exports = controller