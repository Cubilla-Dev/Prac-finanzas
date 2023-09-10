const passport = require('passport')
const passportJWT = require('passport-jwt')

const ExtractJWT = passportJWT.ExtractJwt
const JWTStrategy = passportJWT.Strategy
const User = require('../models/authRegister')

passport.use(new JWTStrategy({
    secretOrKey: 'clave_secreta',
    //jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    jwtFromRequest: (req)=>{
        const token = req.header['authorization'].split(' ')[1]
        console.log('EL TOKEN SE OBTUVO ', token)
        return token;
    }
}, async (payload, done) => {
    const user = await UserActivation.findOne({user_id: payload.id})
    console.log('EL VALOR DEL ID ES ', payload.id)
    if(!user){
        return done(new Error('El usuario no existe'));
    }
    done(null, user)
}
))

module.exports = passport