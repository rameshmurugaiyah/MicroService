const EventsInfo = require('../models/event.model');
var multer = require('multer');

exports.eventdetails = function (req, res) {
    EventsInfo.find({},function (err, eventinfo) {   
      if (err) return next(err);       
        res.send(eventinfo);
    });
};

exports.event_create = function (req, res) {
    let eventsInfo = new EventsInfo(
        {
            EventID : req.body.EventID,
            EventName : req.body.EventName,
            Description : req.body.Description,
            TechnologyStack : req.body.TechnologyStack,
            TeamEvent : req.body.TeamEvent,
            MaxTeamCount : req.body.MaxTeamCount,
            MinTeamCount : req.body.MinTeamCount,
            TotalTeamCount : req.body.TotalTeamCount,
            StartDate : req.body.StartDate,
            EndDate : req.body.EndDate,
            JudgingStartDate : req.body.JudgingStartDate,
            JudgingEndDate : req.body.JudgingEndDate,
            ResultDate : req.body.ResultDate,
            EventImage : ""
        }
    );

    eventsInfo.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Event Created successfully')
    });
};

exports.event_update = function (req, res) {
    EventsInfo.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, EventData) {
        if (err) return next(err);
        res.send('Event udpated.');
    });
};

exports.file_upload = (req,res)=>{
    var storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, 'public/images/uploads')
        },
        filename: (req, file, cb) => {
          cb(null, file.fieldname + '-' + Date.now())
        }
    });
    var upload = multer({storage: storage});
};