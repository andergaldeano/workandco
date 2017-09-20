const express = require('express');
const router  = express.Router();
const Event    = require('../models/Event');
const multer  = require('multer');
const upload  = multer({ dest: './public/uploads/' });



// GET EVENT DATA
router.get('/event/:id', (req, res, next) => {
    Event.findById(req.params.id, (err, event) => {
      if(err) {return next(err);}
      res.render('events/event', { event: event });
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
  res.render('events/create-event', {
    errorMessage: ''
  });
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
