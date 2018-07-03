const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt=require('bcrypt-nodejs');

let UserSchema = new Schema({    
    UserId : {type: String, required: true, max: 100},
    FirstName : {type: String, required: true, max: 100},
    LastName : {type: String, required: true, max: 100},
    Email : {type: String, required: true, max: 100},
    ContactNumber : {type: String, required: true, max: 100},
    Organization : {type: String, required: true, max: 100},
    Role : {type: String, required: true, max: 100},
    Active :{type: Boolean, required: true, max: 100},
    Password : {type: String, required: true}
});

var User = mongoose.model('users', UserSchema);
module.exports = User;