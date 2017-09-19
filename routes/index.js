var express = require('express');
var router  = express.Router();
const multer  = require('multer');
const upload  = multer({ dest: './public/uploads/' });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
