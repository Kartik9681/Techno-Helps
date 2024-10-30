const User = require('../models/user')
const bcrypt = require("bcrypt");

const home = async(req, res) =>{
    try {
        res
        .status(200)
        .send("hello");
    } catch (error) {
        console.log(error);
    }
}

const register = async(req, res) =>{
    try {
        console.log(req.body);
        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message: "Email already exists"});
        }

        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({
            username, email, phone, password: hash_password
        })

        res.status(200).json({message: "reg succ", token: await userCreated.generateToken(), userId: userCreated._id.toString()});

    } catch (error) {
        res.status(500).json("internal server error");
    }
}

const login = async(req,res) => {
    try {
        const {email, password} = req.body;
        const userExist = await User.findOne({email});
        console.log("HELLO", userExist);
        if(!userExist){
            return res.status(400).json({message: "Invadlid Creds"});
        }

        const passValid = await userExist.comparePassword(password);
        
        if(passValid){
            res.status(200).json({message: "Login succ", token: await userExist.generateToken(), userId: userExist._id.toString()});
        }
        else{
            res.status(401).json({message: "Invalid pass"});
        }
    } catch (error) {
        res.json("internal server error");
    }
}

const user = async (req, res) => {
    try {
        const userData = req.data;
        console.log(userData);
        res.status(200).json({userData})
    } catch (error) {
        console.log('error in user route', error);
    }
}
module.exports = {home, register, login, user};