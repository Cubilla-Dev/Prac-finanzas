const express = require('express');
const router = express.Router()
const controller = require('../controllers/controller')
const passport = require('../helpers/passport')

router.get('/getSmallBlog', controller.getSmallBlog);
router.post('/presupuesto', controller.presForm) //cambiar a ingles el nombre 
router.get('/descargapdf', controller.dowlPDF) //cmbiar a ingles
router.post('/comment', controller.commentForm)
router.post('/formblog', controller.setForm)
router.get('/blog/:id', controller.blogContex)
router.get('/getSidebar', controller.getSidebar)
// router.put('/upSidebar/:id', controller.upSidebar) //falta crear 

module.exports = router