const UserdetailsInfo = require('../models/user.model');
var bodyParser = require('body-parser');
const bcrypt=require('bcrypt-nodejs');

exports.userdetails = function (req, res) {
    UserdetailsInfo.find({},function (err, userInfo) {   
       if (err) return next(err);       
        res.send(userInfo);
    });
};

exports.user_create = function (req, res) {     
    let Password = bcrypt.hashSync(req.body.Password);/*,(err,hash)=>{
        if(err){
            return next(err);
        }
        Password = hash;
        next();
    });*/
    console.log(Password)
    console.log(bcrypt.compareSync(req.body.Password,Password))
    let userdetailsInfo = new UserdetailsInfo(
        {
            UserId:req.body.UserId,
            Password:Password,
            FirstName:req.body.FirstName,
            LastName:req.body.LastName,
            Email:req.body.Email,
            ContactNumber: req.body.ContactNumber,
            Organization: req.body.Organization,
            Role:"USER",
            Active:true
        }
    );
    userdetailsInfo.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully');
    
    });
};

exports.login = (req,res)=>{
    /*
    UserdetailsInfo.findOne({Email:req.body.Email,Password:req.body.Password},(err,userInfo)=>{
        if(err)
            res.send('Failed Authentication');    
            res.send("Authenticated");
    }); */
    UserdetailsInfo.authenticate(req.body.Email, req.body.Password, function (error, user) {
        if (error || !user) {
            
          var err = new Error('Wrong email or password.');
          err.status = 401;
          return next(err);
        } else {
          req.session.userId = user._id;
          console.log(user)
          return res.redirect('/profile');
        }
      });
};
exports.profile = (req,res)=>{
    return res.send('GET profile');
};


    
    
    /* 
    Users.authenticate = (email, password, callback)=> {
        User.findOne({ Email: email })
          .exec(function (err, user) {
            if (err) {
              return callback(err)
            } else if (!user) {
              var err = new Error('User not found.');
              err.status = 401;
              return callback(err);
            }
            bcrypt.compare(password, user.password, function (err, result) {
              if (result === true) {
                return callback(null, user);
              } else {
                return callback();
              }
            })
          });
      }*/
    
