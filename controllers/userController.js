const Users = require('../models/user');
const jwt = require('jsonwebtoken');

function craeteToken(id){
    return jwt.sign({id},process.env.ACCESS_TOKEN,{expiresIn:'3d'});
}

const loginUser = async (req,res) => {
    const {email,password} = req.body
    try{
        const user = await Users.login(email,password);
        const username = await user.name;
        console.log("log from loginUser static:",user);
        const token = craeteToken(user.id);
        res.status(200).json({name:username,email,token})
    }catch(err){
        res.status(400).json({err:err.message})
    }
}


const signupUser = async (req,res) => {
    // console.log(req.body);
    const {name,email,password} = req.body

    const token = craeteToken(Users._id);
    try{
        const user = await Users.signup(name,email,password);
        res.status(200).json({name,email,token})
    }catch(err){
        res.status(400).json({err:err.message})
    }
}

export {loginUser,signupUser};