const SetBlog = require('../models/createBlog')

const smallBlog = async (req, res) => {
    try {   
        const result = await SetBlog.findAll()
        if(!result){
            return res.status(404).json({message:'No se pudo acceder a los datos del blog'})
        }
        return res.status(200).json(result)
    }catch{
        res.status(500).json({message:'Error del servidor'})
    }
}

module.exports = smallBlog;