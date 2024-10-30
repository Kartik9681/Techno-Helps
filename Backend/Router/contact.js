const expresss = require('express');
const contactRouter = expresss.Router();
// const validate = require("../middlewares/validate-middleware");

const contactSchema = require('../models/contact');
const contact = require('../Controllers/contact');

contactRouter.route('/contact').post(contact);

module.exports = contactRouter;

