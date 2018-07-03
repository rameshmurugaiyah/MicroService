const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({    
    UserId : {type: String, required: true, max: 100},
    FirstName : {type: String, required: true, max: 100},
    LastName : {type: String, required: true, max: 100},
    Email : {type: String, required: true, max: 100},
    ContactNumber : {type: String, required: true, max: 100},
    Organization : {type: String, required: true, max: 100},
    Role : {type: String, required: true, max: 100},
    Active :{type: String, required: true, max: 100}
});


// Export the model
module.exports = mongoose.model('users', UserSchema);