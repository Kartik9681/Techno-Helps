const express = require('express');
const serviceRouter = express.Router();
const services = require('../Controllers/service')


serviceRouter.route('/service').get(services);

module.exports = serviceRouter;