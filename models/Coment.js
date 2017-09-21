const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comentSchema = new Schema({
  writersName: String,
  description: String,
  eventId: String
});

comentSchema.set('timestamps', true);

const Coment = mongoose.model('Coment', comentSchema);

module.exports = Coment;
