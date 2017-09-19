const express = require('express');
const router  = express.Router();
const Space    = require('../models/Space');
const multer  = require('multer');
const upload  = multer({ dest: './public/uploads/' });



// GET SPACE DATA
router.get('/space/:id', (req, res, next) => {
    Space.findById(req.params.id, (err, space) => {
      if(err) {return next(err);}
      res.render('spaces/space', { space: space });  
    });
});


// VIEW ALL SPACES
router.get('/all-spaces' , (req, res, next) => {
  Space.find()
  .then(result => res.render('spaces/all-spaces-list', { spaces: result }))
  .reject (err => console.log(err));
});


// DELETE SPACES
router.get('/delete/:id', (req, res, next) => {
  Space.findByIdAndRemove(req.params.id)
    .then( result =>  res.redirect('/all-spaces'))
    .reject( err => console.log(err));
});


module.exports = router;
