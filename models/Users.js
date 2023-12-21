const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password:String,
    age:String,
    dob:String,
    gender:String,
    mobile:String,
    highEdu:String
})

const UsersModel = mongoose.model("register",UserSchema)

module.exports = UsersModel