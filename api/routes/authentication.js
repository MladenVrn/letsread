const bcrypt = require('bcrypt');
const express = require('express');
const userModel = require('../models/userModel');
const router = express.Router();


//do registration
router.post("/registration", (req,res,next) => {
    //get requet params
    const username = req.body.username;
    const password = req.body.password;
    const saltRounds = 10;
    //encrypt pw 
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    //create new user
    const user = new userModel({_id:2 , username:username , password:hashedPassword , user_id:1});

    //check if user exists
    if(!userModel.find({username: username})){
        user.save(); //save user into DB
        res.status(200).json({message: `successfully registered user:  ${username}`})
    }else{
        res.status(401).json({error: `user:  ${username} already exists`});
    }  
});

//do authentication
router.post("/login", async (req,res,next) => {

    //get params
    const usernameCurrent = req.body.username;
    const passwordCurrent = req.body.password;

    const user = await userModel.findOne({username:usernameCurrent});

    if(user){    
        const hashedPW = user.password;
        //compare pw from request with hashed pw
        bcrypt.compare(passwordCurrent, hashedPW, (error, result) => {
            if(result) {
                res.status(200).json({user});
            }else{
                res.status(404).json({error: "incorrect password!"});
            }
        });
    }else {
        res.status(404).json({error: "user not found!"});
    }
});

module.exports = router;

