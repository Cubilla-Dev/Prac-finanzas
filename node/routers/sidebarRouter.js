const express = require('express');
const router = express.Router()
const passport = require('../helpers/passport')
const sidebarController = require('../controllers/sidebarController')


// router.use( passport.authenticate('jwt',{session:false}) )
router.post('/sidebar', sidebarController)


module.exports = router;