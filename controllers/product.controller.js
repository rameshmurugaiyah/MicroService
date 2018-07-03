const UserdetailsInfo = require('../models/product.model');

exports.userdetails = function (req, res) {
    UserdetailsInfo.find({},function (err, userInfo) {    
        console.log(userInfo);
        if (err) return next(err);       
        res.send(userInfo);
    });
};