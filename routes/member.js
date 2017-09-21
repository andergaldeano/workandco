const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const multer  = require('multer');
const upload  = multer({ dest: './public/uploads/' });



// GET USER PROFILE
router.get('/profile', (req, res, next) => {
    res.render('members/profile', {
      errorMessage: 'Error in editing'
  });
});


// OTHER USERS PROFILES
router.get('/profile/:id', (req, res, next) => {
  User.findById(req.params.id , (err, member) => {
    if (err) { return next(err); }
    res.render('members/other-members', { member: member });
  });
});


// SEE EDIT MY PROFILE
router.get('/edit-profile/:id', (req, res, next) => {
  User.findById(req.params.id , (err, member) => {
    if (err) { return next(err); }
    res.render('members/edit-profile', { member: member });
  });
});


// SUBMIT MY PROFILE UPDATES
router.post('/edit-profile/:id', upload.single('photo'), (req, res, next) => {
  const update = {
    name : req.body.name,
    email  : req.body.email,
    username : req.body.username,
    pic_path: `/uploads/${req.file.filename}`,
    pic_name: req.file.originalname
  };

  User.findByIdAndUpdate(req.params.id , update, (err, member) => {
    if (err){ console.log(err); }
    console.log("Necesito ver MEMBER", member);
    console.log("Necesito ver UPDATE", update);
    return res.render('members/profile', {currentUserInfo : update});
  });
});


// VIEW ALL PROFILES
router.get('/allmembers' , (req, res, next) => {
  User.find()
  .then(result => res.render('members/all-members-list', { members: result }))
  .reject (err => console.log(err));
});


// DELETE MEMEBER
router.get('/delete/:id', (req, res, next) => {
  User.findByIdAndRemove(req.params.id)
    .then( result =>  res.redirect('/allmembers'))
    .reject( err => console.log(err));
});


module.exports = router;
