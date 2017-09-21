const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const multer  = require('multer');
const upload  = multer({ dest: './public/uploads/' });
const bcrypt  = require('bcrypt');
const bcryptSalt = 10;


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

// VIEW CREATE EVENT-MANAGER
router.get('/create-event-manager', (req, res, next) => {
    res.render('gestion/create-event-manager', {
        errorMessage: ""
      });
});


// CREATE EVENT-MANAGER IN DATA
router.post('/create-event-manager', (req, res) => {
    const passwordInput = req.body.password;

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashedPass = bcrypt.hashSync(passwordInput, salt);


  newManager = new User({
    name: req.body.name,
    email: req.body.email,
    username: "no user name provided",
    password: hashedPass,
    pic_path: '/uploads/66af7a224082f315c0756cf974ecad64',
    pic_name:'avatar.png',
    role: 'EventManager'
  });


  User.findOne({ 'email' : req.body.email})

    .then( (isThereUser) => {
      console.log(isThereUser);
      if(isThereUser === null){
        newManager.save().then( ok => {
          res.redirect('/');
        });
      } else{
         res.render('gestion/create-event-manager', {errorMessage: `This email has already been used for another user. Try it with other email.`
        });
     }});

});



module.exports = router;
