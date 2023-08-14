const express = require('express');
const router = express.Router()
const controller = require('../controllers/controller')


router.post('/presupuesto', controller.presForm)
router.get('/descargapdf', controller.dowlPDF)
router.post('/comment', controller.commentForm)

module.exports = router