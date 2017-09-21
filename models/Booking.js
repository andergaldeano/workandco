const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  eventId: String,
  spaceId: String
});

bookingSchema.set('timestamps', true);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
