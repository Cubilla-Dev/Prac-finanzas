const express = require('express');
const router = express.Router()
const passport = require('../helpers/passport')
const blogContextController = require('../controllers/blogContextController')


// router.use( passport.authenticate('jwt',{session:false}) )
router.post('/blog/:id', blogContextController)


module.exports = router;