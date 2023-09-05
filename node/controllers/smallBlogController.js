const SetBlog = require('../models/createBlog');



const useSmallBlog = {
    getSmallBlog: async (req, res) => {
        try {   
            const result = await SetBlog.findAll()
            res.json(result)
        }catch{
            console.log('error al recibir los datos ')
        }
    }
}

module.exports = useSmallBlog;