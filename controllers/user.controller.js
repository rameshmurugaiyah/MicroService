const UserdetailsInfo = require('../models/user.model');
var bodyParser = require('body-parser');
const bcrypt=require('bcrypt-nodejs');
const uuid = require('uuid');

exports.userdetails = function (req, res) {
    UserdetailsInfo.find({},function (err, userInfo) {   
       if (err) return next(err);       
        res.send(userInfo);
    });
};

exports.user_create = function (req, res) {     
    UserdetailsInfo.findOne({Email:req.body.Email},(err,userInfo)=>{
        if(userInfo!==null){
            return res.send("User already exists")
        }
        else{
            let Password = bcrypt.hashSync(req.body.Password);
            let userdetailsInfo = new UserdetailsInfo(
                {
                    UserId:uuid.v1(),
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
        }
    });
    
};

exports.login = (req,res)=>{
    UserdetailsInfo.findOne({Email:req.body.Email},(err,userInfo)=>{
        if(err){
            res.send('Failed Authentication');    
        }
        else{
            if(bcrypt.compareSync(req.body.Password,userInfo.Password))
                return res.redirect('/profile');
        }
            
    });
};
exports.profile = (req,res)=>{
    return res.send('GET profile');
};
    
