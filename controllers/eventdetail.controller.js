const EventDetailsInfo = require('../models/eventdetail.model');



exports.eventdetail = function (req, res) {
    EventDetailsInfo.find({},function (err, eventdetailinfo) {   
      if (err) return next(err);       
        res.send(eventdetailinfo);
    });
};