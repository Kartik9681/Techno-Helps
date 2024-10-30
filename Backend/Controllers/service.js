const Service = require('../models/service');

const services = async (req,res) =>{
    try {
        const response = await Service.find();
        if(!response){
            return res.status(404).json({msg: 'Cant get services'});
        }
        return res.status(200).json({msg : response});
    } catch (error) {
        console.log('error in getting services');
    }
}

module.exports = services;