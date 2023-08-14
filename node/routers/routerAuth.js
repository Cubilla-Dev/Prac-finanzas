const express = require('express');
const routerAuth = express.Router()
const { loginCtrl, registerCtrl } = require('../controllers/auth')

routerAuth.post('/login', loginCtrl)

routerAuth.post('/register', registerCtrl)

module.exports = routerAuth