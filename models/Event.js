const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: String,
  description: String,
  place: String,
  image: String,
  date: Date
});

eventSchema.set('timestamps', true);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
