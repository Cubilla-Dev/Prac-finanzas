const {Router} = require('express');
const router = Router();

const commentController = require('../controllers/commentController');

router.post('/comment', commentController.setComment)


module.exports = router;
