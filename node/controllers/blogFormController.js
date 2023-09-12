const SetBlog = require('../models/createBlog')

const blogForm = async (req, res) => {
try {   
        const { title, body } = req.body;
        if(!title || !body){
            return res.status(400).json({error: 'Falta parametros'})
        }
        const blog = await SetBlog.create({
            title: title,
            body: body
        })
        if(!blog){
            return res.status(404).json({message:'No se pudo agregar el blog'})
        }
        return res.status(200).json({message: 'Se creo correctamente el blog'})
    } catch {
        res.status(500).json({message:'Error del servidor'})    
    }
};

module.exports = blogForm;