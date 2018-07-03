const EventsInfo = require('../models/event.model');



exports.eventdetails = function (req, res) {
    EventsInfo.find({},function (err, eventinfo) {   
      if (err) return next(err);       
        res.send(eventinfo);
    });
};