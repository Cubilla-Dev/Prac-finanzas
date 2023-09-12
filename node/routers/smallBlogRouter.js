const express = require('express');
const router = express.Router()
// const passport = require('../helpers/passport')
const smallBlogController = require('../controllers/smallBlogController')


// router.use( passport.authenticate('jwt',{session:false}) )
router.get('/smallblog', smallBlogController)


module.exports = router;