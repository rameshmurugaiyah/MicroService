const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EventDetailSchema = new Schema({
    "EventDetailID" :{type: String, required: true, max: 100},
    "UserID" : {type: String, required: true, max: 100},
    "EventID" : {type: String, required: true, max: 100},
    "Score" : {type: String, required: true, max: 100},
    "FileUpload" :{type: String, required: true, max: 100}   
});


// Export the model
module.exports = mongoose.model('eventdetails', EventDetailSchema);