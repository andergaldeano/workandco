const express = require('express');
const router  = express.Router();
const Event    = require('../models/Event');
const multer  = require('multer');
const upload  = multer({ dest: './public/uploads/' });
const Space    = require('../models/Space');




// GET EVENT DATA
router.get('/event/:id', (req, res, next) => {
  const scope = {};
  Event.findById(req.params.id)
    .then (event => {
      scope.event = event;
      return Space.findOne({ 'name' : event.place});
    })
    .then ( space => {
      res.render('events/event', { event: scope.event, space: space});
    });
});


// VIEW ALL EVENTS
router.get('/all-events' , (req, res, next) => {
  Event.find()
  .then(result => res.render('events/all-events-list', { events: result }))
  .reject (err => console.log(err));
});

//SHOW CREATE EVENT PAGE
router.get('/create-event', (req, res, next) => {
  Space.find()
  .then( spaces => res.render('events/create-event', { spaces: spaces}))
  .reject (err => console.log(err));
});


//CREATE EVENT IN DATA
router.post('/create-event', upload.single('image'), function(req, res){

  event = new Event({
    name: req.body.name,
    description: req.body.description,
    place: req.body.place,
    image: `/uploads/${req.file.filename}`
  });

 event.save((err) => {
      res.redirect('/all-events');
  });
});

module.exports = router;
