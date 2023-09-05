const {Router} = require('express');
const router = Router();

const formController = require('../controllers/formController');

router.get('/formblog', formController.setForm)


module.exports = router;
