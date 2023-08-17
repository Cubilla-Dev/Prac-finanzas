const express = require('express');
const router = express.Router()
const controller = require('../controllers/controller')

router.get('/getSmallBlog', controller.getSmallBlog);
router.post('/presupuesto', controller.presForm) //cambiar a ingles
router.get('/descargapdf', controller.dowlPDF) //cmbiar a ingles
router.post('/comment', controller.commentForm)
router.post('/formblog', controller.setForm)
router.get('/blog/:id', controller.blogContex)

module.exports = router