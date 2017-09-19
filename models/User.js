const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  pic_path: {
    type: String,
    default: '/uploads/fb503dbddd3bd2f446ff7f32b78643b3'
  },
  pic_name: {
    type:String,
    default:'1vqfec.jpg'
 },
  role: {
    type: String,
    enum : ['Member', 'Admin'],
    default : 'Member'
 },
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;
