const SetComment = require('../models/createComment')

const useComment = {
    setComment: async (res, req) => {
        try {   
            const { title_blog, comment_blog } = req.body
            if(!title_blog || !comment_blog){
                return res.send.status(400).json({message: 'Faltan parametros'})
            }
            const result = await SetComment.create({
                user_id: 1, //falta recibir la id todavia
                title_blog: title_blog,
                comment_blog: comment_blog
            })
            res.send.json(result)
        }catch{
            res.send.status(500).json({message: 'Error del servidor'})
        }
    }
}

module.exports= useComment;