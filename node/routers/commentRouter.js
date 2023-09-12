const express = require('express');
const router = express.Router()
const passport = require('../helpers/passport')
const commentFormController = require('../controllers/commentFormController')


router.use( passport.authenticate('jwt',{session:false}) )
router.post('/comment', commentFormController)


module.exports = router;