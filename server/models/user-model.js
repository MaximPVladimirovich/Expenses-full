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

UserSchema.methods = {
  // This method checks for sign in attempts and verifies user
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password
  },
  // Encrypts password from user input string
  encryptPassword: function (password) {
    if (!password) return ''
    try {
      return crypto.createHmac(`sha1`, this.salt).update(password).digest('hex')
    } catch (error) {
      return ''
    }
  },
  // Create a unique salt from current timestamp and math.random
  makeSalt: function () {
    return Math.round((new Date().valueOf() * Math.random())) + ''
  }
}

export default Mongoose.model('User', UserSchema)