const Review   = require('../models/Review');
const Event    = require('../models/Event');

module.exports = {
  createGet: (req, res, next) => {
    res.render('reviews/create', {
      user: res.locals.user,
      idEvent: req.params
    });
  },
  createPost: (req, res, next) => {
    Event.find({_id: req.params.id}, (err, campaign) => {
      if (err) {
        console.log(err);
      }
      let newReview = new Review({
        senderId: res.locals.user._id,
        senderName: res.locals.user.username,
        title: req.body.title,
        description: req.body.description,
        stars: req.body.stars,
      });
      newReview.save()
      .then((result, err) => {
        res.redirect(`../../event/${req.params.id}`);
      })
      .catch(error => next(error));
    });
  },

  delete: (req, res, next) => {
    Review.findByIdAndRemove(req.params.id, (err, obj) => {
      if (err) {
        return next(err);
      }
      res.redirect("/event");
    });
  }
};
