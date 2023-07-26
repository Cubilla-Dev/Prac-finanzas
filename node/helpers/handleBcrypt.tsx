const bcrypt = require('bcryptjs')

//pra encriptar la contraseña
const encrypt = async (textPlain: string) => {
    const hash = await bcrypt.hash(textPlain, 10)
    return hash
}
//para compara la contraseña
const compare = async (passwordPlain, hashPassword) =>{
    return await bcrypt.compare(passwordPlain, hashPassword)
}


module.exports = {encrypt, compare}