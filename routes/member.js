var express = require('express');
var router  = express.Router();
const User = require('../models/User.js');

// GET USER PROFILE

router.get('/profile', (req, res, next) => {
  res.render('members/profile', {
    errorMessage: ''
  });
});



// EDIT MY PROFILE

router.get('/edit-profile/:id', (req,res, next) => {
  User.findById(req.params.id)
    .then(result => res.render('members/edit-profile.ejs', {member:result}))
    .reject (err => console.log(err));
});

router.post('/edit-profile/:id', (req, res, next) => {
  const update = {
    name : req.body.name,
    email  : req.body.email,
    username : req.body.username
  };
  User.findByIdAndUpdate(req.params.id , update)
    .then(result => res.render('members/profile.ejs'))
    .catch(err => console.log ("Error in editing member"));
});


// VIEW ALL PROFILES

router.get('/allmembers' , (req, res, next) => {
  User.find()
  .then(result => res.render('members/all-members-list.ejs', {members: result}))
  .reject (err => console.log(err));
});





module.exports = router;
