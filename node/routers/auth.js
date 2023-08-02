const express = require('express');
const auth = express.Router()
const jwt = require('jsonwebtoken');
const { loginCtrl, registerCtrl } = require('../controllers/auth')

auth.post('/login', loginCtrl)

auth.post('/register', registerCtrl)

module.exports = auth