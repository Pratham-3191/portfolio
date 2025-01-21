const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message:{
    type:String,
    required: true,
  }

}, { timestamps: true });
const User = mongoose.model('user', userSchema);
module.exports=User