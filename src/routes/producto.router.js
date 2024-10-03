const { getAll, create} = require('../controllers/productos.controllers')
const express = require('express');

const productosRouter = express.Router();

productosRouter.route('/productos')
    .get(getAll)
    .post(create)
   

module.exports = productosRouter;