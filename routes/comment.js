const express = require('express');
const router  = express.Router();
const Comment = require('../models/Comment');
const multer  = require('multer');
const upload  = multer({ dest: './public/uploads/' });
const Event   = require('../models/Event');


// SUBMIT COMMENT
router.post('/leave-comment/:id/:name', (req, res) => {
  Event.findById(req.params.id)
  .then (event => {
    newComment = new Comment({
    writersName: req.params.name,
    description: req.body.description,
    eventId: event._id
    });

    newComment.save().then( ok => {
      res.redirect(`/event/${req.params.id}`);
    });
  });
});

module.exports = router;
