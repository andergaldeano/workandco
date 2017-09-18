var express = require('express');
var router  = express.Router();

// GET USER PROFILE

router.get('/profile', (req, res, next) => {
  res.render('members/profile', { 
    errorMessage: ''
  });
});

module.exports = router;
