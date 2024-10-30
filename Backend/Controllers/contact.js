const Contact = require('../models/contact');

const contact = async(req, res) => {
    try {
        const response = req.body;
        console.log(req.body);
        await Contact.create(response);
        return res.status(200).json({msg: "Message Sent"});
    } catch (error) {
        return res.status(500).json({msg: "Message not sent"});
    }
}

module.exports = contact;