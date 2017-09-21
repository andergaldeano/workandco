const router           = require('express').Router();
const reviewController = require('../middlewares/reviewController');
// const middle           = require('../middlewares/isLoggedIn');
const multer           = require('multer');
const upload           = multer({ dest: './public/uploads/' });


router.get('/:id/create', reviewController.createGet);
router.post('/:id/create', reviewController.createPost);

router.get('/:id/delete', reviewController.delete);

module.exports = router;
