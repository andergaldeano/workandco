const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spaceSchema = new Schema({
  name: String,
  capacity: String,
  pictures: String,
  isEvent: {
    type: Boolean,
    default: false }
});

spaceSchema.set('timestamps', true);

const Space = mongoose.model('Space', spaceSchema);

module.exports = Space;
