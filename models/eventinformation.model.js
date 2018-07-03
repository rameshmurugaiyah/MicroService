const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EventInformationsSchema = new Schema({
    "EventInformationID" : {type: String, required: true, max: 100},
    "EventID" : {type: String, required: true, max: 100},
    "Comments" : {type: String, required: true, max: 100}   
});


// Export the model
module.exports = mongoose.model('eventinformations', EventInformationsSchema);