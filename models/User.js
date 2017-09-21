const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  pic_path: {
    type: String,
    default: '/uploads/66af7a224082f315c0756cf974ecad64'
  },
  pic_name: {
    type:String,
    default:'avatar.png'
 },
  role: {
    type: String,
    enum : ['Member', 'EventManager', 'Admin'],
    default : 'Member'
 },
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;
