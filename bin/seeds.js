const mongoose   = require('mongoose');
const bcrypt     = require("bcrypt");
const bcryptSalt = 10;
const User       = require('../models/User');

mongoose.connect("mongodb://localhost/co-work");
var salt = bcrypt.genSaltSync(bcryptSalt);
const password = "admin";
var encryptedPass = bcrypt.hashSync(password, salt);

const Admin = new User({
  username: 'admin',
  name: 'Admin',
  email: 'admin@admin.com',
  password: encryptedPass,
  role: 'Admin'
});

User.create(admin, (err, user) => {
  if (err) {
    throw err;
  }
  console.log(user);
  mongoose.connection.close();
});
