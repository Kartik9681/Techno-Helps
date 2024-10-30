const express = require('express');
const {getUsers, getSingleUser, deleteUser, updateData} = require('../Controllers/admin-user');
const adminUserRouter = express.Router();
const tokenMiddleware = require('../middlewares/tokenMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

adminUserRouter.route('/users').get(tokenMiddleware, adminMiddleware,getUsers);
adminUserRouter.route('/users/delete/:id').delete(tokenMiddleware, adminMiddleware,deleteUser);
adminUserRouter.route(`/users/:id`).get(tokenMiddleware, adminMiddleware, getSingleUser);
adminUserRouter.route('/users/update/:id').patch(tokenMiddleware, adminMiddleware, updateData);
module.exports = adminUserRouter;