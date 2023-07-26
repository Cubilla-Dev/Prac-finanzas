const express = require('express');
const router = express.Router()
const controller = require('../controllers/controller')

router.get('/', controller.index)
router.post('/presupuesto', controller.presForm)
router.get('/descargapdf', controller.dowlPDF)

module.exports = router