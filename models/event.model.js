const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EventSchema = new Schema({
    EventID : {type: String, required: true, max: 100},
    EventName  :{type: String, required: true, max: 100},
    Description : {type: String, required: true, max: 100},
    TechnologyStack : {type: String, required: true, max: 100},
    TeamEvent : {type: String, required: true, max: 100},
    MaxTeamCount : {type: String, required: true, max: 100},
    MinTeamCount : {type: String, required: true, max: 100},
    TotalTeamCount : {type: String, required: true, max: 100},
    StartDate : {type: String, required: true, max: 100},
    EndDate : {type: String, required: true, max: 100},
    JudgingStartDate : {type: String, required: true, max: 100},
    JudgingEndDate :{type: String, required: true, max: 100},
    ResultDate : {type: String, required: true, max: 100},
    EventImage : {type: String, required: true, max: 100}    
});


// Export the model
module.exports = mongoose.model('events', EventSchema);