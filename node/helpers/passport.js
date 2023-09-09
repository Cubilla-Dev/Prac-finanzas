const passport = require('passport')
const passportJWT = require('passport-jwt')

const ExtractJWT = passportJWT.ExtractJwt
const JWTStrategy = passportJWT.Strategy

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'clave_secreta'
}))