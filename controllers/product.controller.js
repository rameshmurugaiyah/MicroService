const UserdetailsInfo = require('../models/user.model');

exports.userdetails = function (req, res) {
    UserdetailsInfo.find({},function (err, userInfo) {    
        console.log(userInfo);
        if (err) return next(err);       
        res.send(userInfo);
    });
};