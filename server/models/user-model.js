import { Mongoose } from "mongoose";

const UserSchema = new Mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  email: {
    type: String,
    trim: true,
    unique: 'Email already exists',
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required'
  },
  hashed_password: {
    type: String,
    require: "Password is required"
  },
  created: {
    type: Date,
    defualt: Date.now
  },
  updated: Date,
  salt: String
})

UserSchema.virtual('password').set(function (password) {
  this._password = password
  this.salt = this.makeSalt()
  this.hashed_password = this.encryptPasswor(password)
}).get(function () {
  return this._password
})

export default Mongoose.model('User', UserSchema)