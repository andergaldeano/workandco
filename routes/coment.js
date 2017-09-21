const express = require('express');
const router  = express.Router();
const Coment    = require('../models/Coment');
const multer  = require('multer');
const upload  = multer({ dest: './public/uploads/' });
const Event   = require('../models/Event');

// SUBMIT COMMENTARY
router.post('/leave-coment/:id/:name', (req, res) => {
  Event.findById(req.params.id)
  .then (event => {
    newComent = new Coment({
    writersName: req.params.name,
    description: req.body.description,
    eventId: event._id
    });

    newComent.save().then( ok => {
      res.redirect(`/event/${req.params.id}`);
    });
  });
});




module.exports = router;
