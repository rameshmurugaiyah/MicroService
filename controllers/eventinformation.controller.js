const EventInformation = require('../models/eventinformation.model');



exports.eventinform = function (req, res) {
    EventInformation.find({},function (err, eventinformation) {   
      if (err) return next(err);       
        res.send(eventinformation);
    });
};