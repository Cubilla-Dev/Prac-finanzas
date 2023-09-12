const SetComment = require('../models/createComment')


//REPARAR falta que se le pase el id todavia
const commentForm = async (req, res) => {
    try {   
        const { title_blog, comment_blog } = req.body
        if(!title_blog || !comment_blog){
            return res.status(400).json({error: 'Falta parametros'})
        }
        const comment = await SetComment.create({
            user_id: 1,
            title_blog: title_blog,
            comment_blog: comment_blog
        })
        if(!comment){
            return res.status(404).json({message:'No se pudo registrar el comentario'})
        }
        return res.status(200).json({message: 'Se creo correctamente el comentario'})

    }catch{
        res.status(500).json({message:'Error del servidor'})
    }
}

module.exports = commentForm;