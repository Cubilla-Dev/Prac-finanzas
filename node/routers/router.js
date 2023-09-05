const express = require('express');
const router = express.Router()
const controller = require('../controllers/controller')

router.post('/presupuesto', controller.presForm) //cambiar a ingles el nombre 
router.get('/descargapdf', controller.dowlPDF) //cmbiar a ingles
router.get('/getSidebar', controller.getSidebar)
// router.put('/upSidebar/:id', controller.upSidebar) //falta crear 

module.exports = router