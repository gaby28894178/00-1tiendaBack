
const User = require ('./User');
const Productos = require ('./Productos');


Productos.belongsTo(User);
User.hasMany(Productos);