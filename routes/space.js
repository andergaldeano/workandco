const express = require('express');
const router  = express.Router();
const Space   = require('../models/Space');
const multer  = require('multer');
const upload  = multer({ dest: './public/uploads/' });
const Event   = require('../models/Event');


// GET SPACE DATA
router.get('/space/:id', (req, res, next) => {
    Space.findById(req.params.id, (err, space) => {
      if(err) {return next(err);}
      res.render('spaces/space', { space: space});
    });
});


// VIEW ALL SPACES
router.get('/all-spaces' , (req, res, next) => {
  Space.find()
  .then(result => res.render('spaces/all-spaces-list', { spaces: result }))
  .reject (err => console.log(err));
});


//SHOW CREATE SPACE PAGE
router.get('/create-space', (req, res, next) => {
  res.render('spaces/create-space', {
    errorMessage: ''
  });
});


//CREATE SPACE IN DATA
router.post('/create-space', upload.single('image'), function(req, res){

  space = new Space({
    name: req.body.name,
    capacity: req.body.capacity,
    picture: `/uploads/${req.file.filename}`,
    isEvent: false
  });

 space.save((err) => {
      res.redirect('/all-spaces');
  });
});


module.exports = router;
