const SetBlog = require('../models/createBlog')

const blogContex = async (req, res) =>{
    try{
        const id = req.params.id
        if(!id){
            return res.status(400).json({error: 'Falta parametros'})
        }
        const context = await SetBlog.findByPk(id)
        if(!context){
            return res.status(404).json({message:'No se encontro ningun blog'})
        }
        return res.status(200).json(context)
    }catch{
        res.status(500).json({message:'Error del servidor'})
    }
}

module.exports = blogContex;