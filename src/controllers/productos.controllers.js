const catchError = require('../utils/catchError');
const Productos = require('../models/Productos');

// Get All
const getAll = catchError(async (req, res) => {
    const result = await Productos.findAll();
    return res.status(200).json(result);
});

// Get One
const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Productos.findByPk(id);
    return !result ? res.status(404).json({ msj: 'Nada q Mostrar' }) : res.json(result);
});

// POST
const create = catchError(async (req, res) => {
    const result = await Productos.create(req.body);
    return res.status(201).json(result);
});

// UPDATE
const update = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Productos.update(req.body, { where: { id }, returning: true });
    return result[0] === 0 ? res.sendStatus(404) : res.json(result[1][0]);
});

// DELETE
const destroy = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Productos.destroy({ where: { id } });
    return !result ? res.status(404).json({ msj: 'Nada Para mostrar' }) : res.status(204).json({ msg: 'Dato Eliminado con Exito' });
});

module.exports = {
    getAll,
    getOne,
    create,
    update,
    destroy
};