const express = require('express');
const adminContactRouter = express.Router();
const {contactData, deleteContact} = require('../Controllers/admin-contact');
const tokenMiddleware = require('../middlewares/tokenMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

adminContactRouter.route('/contacts').get(tokenMiddleware, adminMiddleware, contactData);
adminContactRouter.route('/contacts/delete/:id').delete(tokenMiddleware, adminMiddleware, deleteContact);

module.exports = adminContactRouter;