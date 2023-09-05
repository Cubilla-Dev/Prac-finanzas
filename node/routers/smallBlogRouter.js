const {Router} = require('express');
const router = Router();

const smallBlogController = require('../controllers/smallBlogController');

router.get('/getSmallBlog', smallBlogController.getSmallBlog)


module.exports = router;
