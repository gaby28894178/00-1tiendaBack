const catchError = require('../utils/catchError');
const User = require('../models/User');

// Get All
const getAll = catchError(async (req, res) => {
    const result = await User.findAll();
    return res.json(result);
});

// Get One
const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await User.findByPk(id);
    return !result ? res.status(404).json({ msj: 'Nada q Mostrar' }) : res.json(result);
});


// POST
const create = catchError(async (req, res) => {
    // const result = await User.create(req.body);
    // return res.status(201).json(result);
    // console.log(req.body)
    const {correo,fecha_nacimiento} = req.body;
    if (!correo){
        return res.status(400).json({error:"che coloca un correo "})
    }
    else{
        if (!fecha_nacimiento){

            return res.status(400).json({error:"che coloca un fecha_nacimiento "})
        }
        else{
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return !emailRegex.test(correo)?  res.status(400).json({error:"coloque correo valido"})
            :res.status(201).json( await User.create(req.body));
        }   //comprobar si es formato valido con regex
    }
});

// UPDATE
const update = catchError(async (req, res) => {
    const { id } = req.params;
    const negacion = ["password","correo"];
    negacion.forEach((e)=>{
        delete req.body[e]
    })
    const result = await User.update(req.body, { where: { id }, returning: true });
    return result[0] === 0 ? res.sendStatus(404) : res.json(result[1][0]);
});
        
// DELETE
const destroy = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await User.destroy({ where: { id } });
    return !result ? res.status(404).json({ msj: 'Nada Para mostrar' }) : res.status(204).json({ msg: 'Dato Eliminado con Exito' });
});

module.exports = {
    getAll,
    getOne,
    create,
    update,
    destroy
};