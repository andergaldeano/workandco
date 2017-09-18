const express = require('express');
const router  = express.Router();
const {isAdm} = require('../middlewares/authMiddleware');
const User    = require('../models/User');

// Bcrypt to encrypt passwords
// const bcrypt         = require("bcrypt");
// const bcryptSalt     = 10;
// const ensureLogin    = require("connect-ensure-login");
// const passport       = require("passport");


router.get('/', function(req, res, next) {
  console.log(req.user);
  if(req.user){
    User.find({}, (err, e) => {
      console.log(e);
      if (err) {
          next();
          return err;
        } else {
          res.render('member/index', {members: e});
        }
    });
  } else {
    res.redirect('/auth/login');
  }

});

router.get('/new', isAdm, function(req, res, next) {
  res.render('member/new');
});

router.post('/new', isAdm, function(req, res, next) {
  let {username, name, familyName, password, role} = req.body;

    if (username === "" || password === "") {
      res.render("member/new", { message: "Indicate username and password" });
      return;
    }

    User.findOne({ username }, "username", (err, user) => {
      if (user !== null) {
        res.render("member/new", { message: "The username already exists" });
        return;
      }

      const salt     = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      const newMember = User({
        username: username,
        password: hashPass,
        name: name,
        role: role
      });

      console.log(newMember);

      newMember.save((err) => {
        if (err) {
          res.render("member/new", { message: "Something went wrong" });
        } else {
          console.log('new member created');
          res.redirect("/member");
        }
      });
    });
});

router.get('/:id/delete', isAdm, function(req, res, next) {
  let id = req.params.id;
  User.findByIdAndRemove(id, (err, obj) => {
    if (err){ return next(err); }
    res.redirect("/member");
  });
});

module.exports = router;
