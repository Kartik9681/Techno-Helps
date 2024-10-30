const User = require('../models/user');

const getUsers = async (req, res) =>{
    try {
        const users = await User.find({}, {password: 0});
        console.log(users);
        return res.status(200).json(users);
    } catch (error) {
        return res.status(404).json("error in calling user in admin");
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id : id});
        return res.status(200).json({msg: "user deleted succ"});
    } catch (error) {
        return res.status(401).json({msg: "cant delete"});
    }
}

const getSingleUser = async(req, res) => {
    try {   
        const id = req.params.id;
        const data = await User.findOne({_id: id}, {password: 0});
        return res.status(200).json(data);
    } catch (error) {
        return res.status(401).json({msg: "Cant get single data"});
    }
}

const updateData = async(req, res) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body;

        const updateUser = await User.updateOne({_id: id}, {
            $set: updatedUserData,
        })

        return res.status(200).json(updateUser);
    } catch (error) {
        return res.status(401).json({msg: "Cant update the data"})
    }
}
module.exports = {getUsers, deleteUser, getSingleUser, updateData};