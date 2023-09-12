const express = require('express');
const router = express.Router()
const passport = require('../helpers/passport')
const blogFormController = require('../controllers/blogFormController')


//router.use( passport.authenticate('jwt',{session:false}) )
router.post('/formblog', blogFormController)


module.exports = router;
