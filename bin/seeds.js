const mongoose   = require('mongoose');
const bcrypt     = require("bcrypt");
const bcryptSalt = 10;
const User       = require('../models/User');
const Space      = require('../models/Space');


mongoose.connect("mongodb://localhost/co-work");
var salt = bcrypt.genSaltSync(bcryptSalt);
const password = "admin";
var encryptedPass = bcrypt.hashSync(password, salt);

// CREATE THE ADMIN

const Admin = new User({
  username: 'admin',
  name: 'Admin',
  email: 'admin@admin.com',
  password: encryptedPass,
  role: 'Admin'
});


User.create(Admin, (err, user) => {
  if (err) {
    throw err;
  }
  console.log(user);
  mongoose.connection.close();
});

// CREATE A SPACE

const SpaceDefault = new Space({
  name: "Common Area",
  capacity:"30",
  picture: "/uploads/ad28b8b201ebec1daca38cc064db7e89",
  isEvent: false
});

Space.create(SpaceDefault, (err, space) => {
  if (err) {
    throw err;
  }
  console.log(space);
  mongoose.connection.close();
});
