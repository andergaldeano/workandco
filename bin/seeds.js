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

const SpaceDefault = [
  { name: "Common Area",
    capacity:"30",
    picture: "/uploads/ad28b8b201ebec1daca38cc064db7e89",
    isEvent: false
  },
  { name: "Meeting Room",
    capacity:"5",
    picture: "/uploads/ef9f259f2846bae3f4bada0a5bb6d3a0",
    isEvent: false
  },
  { name: "Bathroom",
    capacity:"1",
    picture: "/uploads/285e8248ee3bf071698a3ab84ceee07b",
    isEvent: false
  },
  { name: "Kitchen",
    capacity:"10",
    picture: "/uploads/3c38eef56347b4a1eeb37cf8321f6d1c",
    isEvent: false
  }
];


Space.create(SpaceDefault, (err, space) => {
  if (err) {
    throw err;
  }
  console.log(space);
  mongoose.connection.close();
});
