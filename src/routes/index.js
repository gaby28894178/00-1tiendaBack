const express = require('express');
const productosRouter = require('./producto.router');
const userRouter = require('./user.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/', userRouter);
router.use('/',productosRouter);

module.exports = router;

