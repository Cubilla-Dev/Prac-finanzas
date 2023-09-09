const SetBlog = require('../models/createBlog');


//para enviar el blog completo
const useBlogContext = {
    getBlog: async (req, res) => {
        try{    
            const id = req.params.id
            if(!id){
                return res.status(400).json({menssaje: 'Faltan parametros'})
            }
            const result = await SetBlog.findByPk(id)
            res.json(result)
        }catch{
            console.log('error al conseguir la id')
        }
    }

}


module.exports = useBlogContext;