const UserdetailsInfo = require('../models/user.model');


exports.userdetails = function (req, res) {
    UserdetailsInfo.find({},function (err, userInfo) {   
       if (err) return next(err);       
        res.send(userInfo);
    });
};

exports.user_create = function (req, res) {
    let userdetailsInfo = new UserdetailsInfo(
        {
            UserId : req.body.UserId,
            FirstName : req.body.FirstName,
            LastName : req.body.LastName,
            Email : req.body.Email,
            ContactNumber : req.body.ContactNumber,
            Organization : req.body.Organization,
            Role : "USER",
            Active : "Yes"
        }
    );

    userdetailsInfo.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    });
};
