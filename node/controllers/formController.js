const SetBlog = require("../models/createBlog");

const useForm = {
    setForm : async (req, res) =>{
        try {   
            const { title, body } = req.body;
            if(!title || !body){
                return res.status(400).json({menssaje: 'Faltan parametros'})
            }
            const result = await SetBlog.create({
                title: title,
                body: body
            })
            res.send(result)
        } catch {
            console.log('error al recibir los datos');
        }
    }

}

module.exports = useForm;