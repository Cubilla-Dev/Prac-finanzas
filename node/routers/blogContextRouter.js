const {Router} = require('express');
const router = Router();

const blogContextController = require('../controllers/blogContextController');

router.get('/blog/:id', blogContextController.getBlog)


module.exports = router;
