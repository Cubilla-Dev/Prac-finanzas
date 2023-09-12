const SetBlog = require('../models/createBlog')


const sidebar = async (req, res) => {
    try {   

        const blog = await SetBlog.findAll()
        if(!blog){
            return res.status(404).json({message:'No se pudo acceder a los datos del blog'})
        }
        return res.status(200).json(blog)
    }catch{
        res.status(500).json({message:'Error del servidor'})
    }
}

module.exports = sidebar;