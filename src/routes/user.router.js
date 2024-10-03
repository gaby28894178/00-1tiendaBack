const {getAll,getOne,create,update,destroy}= require('../controllers/user.controllers')
const express = require('express');

const userRouter = express.Router();

userRouter.route('/users')
    .get(getAll)
    .post(create)



userRouter.route('/users/:id')
    .get(getOne)
    .put(update)
    .delete(destroy)

module.exports = userRouter;
