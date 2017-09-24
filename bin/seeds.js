const mongoose   = require('mongoose');
const bcrypt     = require("bcrypt");
const bcryptSalt = 10;
const User       = require('../models/User');
const Space      = require('../models/Space');
const Event      = require('../models/Event');
mongoose.connect("mongodb://localhost/co-work");
var salt = bcrypt.genSaltSync(bcryptSalt);
const password = "admin";
var encryptedPass = bcrypt.hashSync(password, salt);
// CREATE THE ADMIN
const UsersDefault = [
{ username: ' Zacarías Piedras De Río',
  name: ' Zacarías Piedras De Río',
  email: 'admin@admin.com',
  password: encryptedPass,
  pic_path: "/uploads/zaca.jpg",
  role: 'Admin'
},
{ username: 'Elena No Calvo',
  name: 'Elena No Calvo',
  email: 'elena@1',
  password: encryptedPass,
  pic_path: "/uploads/elena.jpg",
  role: 'Member'
},
{ username: 'Aitor Tilla',
  name: 'Aitor Tilla',
  email: 'aitor@1',
  password: encryptedPass,
  pic_path: "/uploads/aitor.jpg",
  role: 'Member'
},
{ username: 'Joseba Cilarte',
  name: 'Joseba Cilarte',
  email: 'joseba@1',
  password: encryptedPass,
  pic_path: "/uploads/joseba.jpg",
  role: 'Member'
},
{ username: 'Kepa Sacolegui',
  name: 'Kepa Sacolegui',
  email: 'kepa@1',
  password: encryptedPass,
  pic_path: "/uploads/kepa.jpg",
  role: 'Member'
},
{
  username: 'Elsa Pato',
  name: 'Elsa Pato',
  email: 'elsa@1',
  password: encryptedPass,
  pic_path: "/uploads/elsa.jpg",
  role: 'Member'
},
{
  username: 'Lucía Bello',
  name: 'Lucía Bello',
  email: 'lucia@1',
  password: encryptedPass,
  pic_path: "/uploads/lucia.jpg",
  role: 'Member'
},
{
  username: 'Pere Gil',
  name: 'Pere Gil',
  email: 'pere@1',
  password: encryptedPass,
  pic_path: "/uploads/pere.jpg",
  role: 'Member'
},
{
  username: 'Armando Torres',
  name: 'Aramando Torres',
  email: 'armando@1',
  password: encryptedPass,
  pic_path: "/uploads/armando.jpg",
  role: 'Member'
}
];
User.create(UsersDefault, (err, user) => {
  if (err) {
    throw err;
  }
  console.log(user);
  mongoose.connection.close();
});
// CREATE A SPACE
const SpaceDefault = [
  { name: "Common Area",
    capacity:"40 people",
    picture: "/uploads/common.jpg",
    isEvent: false
  },
  { name: "Meeting Room",
    capacity:"5 people",
    picture: "/uploads/meeting.jpg",
    isEvent: false
  },
  { name: "Auditorium",
    capacity:"100 people",
    picture: "/uploads/audito.jpg",
    isEvent: false
  },
  { name: "Kitchen",
    capacity:"20 people",
    picture: "/uploads/kitchen.jpg",
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
// CREATE A EVENT
const EventDefault = [
  { name: "Iron-Beers",
    description: "Friday night, after a whole week working hard, you deserve a break. Our taste beers will make you program like a boss. Come with us! ",
    place: "Auditorium",
    image: "/uploads/beer.jpg",
    date:"2017-10-05"
  },
  { name: "Beer - Pong",
    description: "Has somebody said drinking game? Let's play and try not get drunk. Join us and get some fun.",
    place: "Auditorium",
    image: "/uploads/beerpong.jpg",
    date: "2017-10-06"
  },
  { name: "OPENING DAY",
    description: "Are you ready for it? The best party ever done! On our co-workers big opening day you will be able to meet a lot of people with your same interests and hobbies. Don't be shy and lets date this one a memorable day",
    place: "Auditorium",
    image: "/uploads/opening.jpg",
    date: "2017-10-07"
  },
  { name: "Ajaxs Master Class",
    description: "Do you want to improve your programing skills? In this seminar we will teach you to program with Ajax. The class scheduling:  theory class for the first 2 hours and a practical exercise on the followings where we will review the fundamental elements of language and develop an exceptional mvp",
    place: "Common Area",
    image: "/uploads/ajax.png",
    date: "2017-10-08"
  },
  { name: "CSS Master Class",
    description: "Do you want to improve your programing skills? In this seminar we will teach you to program with CSS. The class scheduling:  theory class for the first 2 hours and a practical exercise on the followings where we will review the fundamental elements of language and develop an exceptional mvp",
    place: "Meeting Room",
    image: "/uploads/css.jpg",
    date: "2017-10-09"
  },
  { name: "Git Master Class",
    description: "Do you want to improve your programing skills? In this seminar we will teach you to program with Git. The class scheduling:  theory class for the first 2 hours and a practical exercise on the followings where we will review the fundamental elements of language and develop an exceptional mvp",
    place: "Meeting Room",
    image: "/uploads/git.png",
    date: "2017-10-10"
  },
  { name: "Java Master Class",
    description: "Do you want to improve your programing skills? In this seminar we will teach you to program with Java. The class scheduling:  theory class for the first 2 hours and a practical exercise on the followings where we will review the fundamental elements of language and develop an exceptional mvp",
    place: "Common Area",
    image: "/uploads/java.jpg",
    date: "2017-10-11"
  },
  { name: "Node Master Class",
    description: "Do you want to improve your programing skills? In this seminar we will teach you to program with Node. The class scheduling:  theory class for the first 2 hours and a practical exercise on the followings where we will review the fundamental elements of language and develop an exceptional mvp",
    place: "Common Area",
    image: "/uploads/nodejs_logo_green.jpg",
    date: "2017-10-12"
  },
  { name: "HTML Master Class",
    description: "Do you want to improve your programing skills? In this seminar we will teach you to program with HTML. The class scheduling:  theory class for the first 2 hours and a practical exercise on the followings where we will review the fundamental elements of language and develop an exceptional mvp",
    place: "Meeting Room",
    image: "/uploads/html.png",
    date: "2017-10-13"
  },
  { name: "Everybody Loves Tacos",
    description: "Are you hungry but also fed up with the fish and chips? Do you want to try something different? What about a taco? Try it! You know you like it!",
    place: "Kitchen",
    image: "/uploads/taco.png",
    date: "2017-10-14"
  },
  { name: "Hiring Week",
    description: "Do you want to a get a job? Try your best on our hiring week.",
    place: "Meeting Room",
    image: "/uploads/hiring.jpg",
    date: "2017-10-15"
  },
  { name: "Yummy Pizza",
    description: "Are you hungry but also fed up with the fish and chips? Do you want to try something different? What about a pizza? Try it! You know you like it!",
    place: "Kitchen",
    image: "/uploads/pizza.jpg",
    date: "2017-10-15"
  }
];
Event.create(EventDefault, (err, event) => {
  if (err) {
    throw err;
  }
  console.log(event);
  mongoose.connection.close();
});
