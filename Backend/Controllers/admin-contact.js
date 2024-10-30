const Contact = require('../models/contact');

const contactData = async (req, res) =>{
    try {   
        const data = await Contact.find();
        console.log(data);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404).json('Cant get contact data');
    }
}

const deleteContact = async (req, res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id: id});
        res.status(200).json({msg: "Contact deleted Succesfully"});    
    } catch (error) {
        res.status(401).json({msg: "Cant delete"});
    }
}

module.exports = {contactData, deleteContact};