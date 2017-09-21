const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  writersName: String,
  description: String,
  eventId: String
});

commentSchema.set('timestamps', true);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
