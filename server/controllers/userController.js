const user = require('../models/user');
const Users = require('../models/user');
const jwt = require('jsonwebtoken');

function craeteToken(id){
    return jwt.sign({id},process.env.ACCESS_TOKEN,{expiresIn:'3d'});
}

const loginUser = async (req,res) => {
    const {email,password} = req.body


    try{
        const user = await Users.login(email,password);
        console.log(user);
        const token = craeteToken(user.id);
        res.status(200).json({email,token})
    }catch(err){
        res.status(200).json({err:err.message})
    }
}


const signupUser = async (req,res) => {
    // console.log(req.body);
    const {email,password} = req.body

    const token = craeteToken(user._id);
    try{
        const user = await Users.signup(email,password);
        res.status(200).json({email,token})
    }catch(err){
        res.status(400).json({err:err.message})
    }
}

module.exports = {loginUser,signupUser};