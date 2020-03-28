const  mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
  userName:{type:Object},
  passWord:{type:Object},
  root:{type:Object}
})

let UserModel = mongoose.model('users',UserSchema)

module.exports = UserModel