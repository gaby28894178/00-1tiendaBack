const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const bcrypt = require ('bcrypt')

// En Mayúsculas y singular
const User = sequelize.define('user', {
    // Definimos las columnas aquí
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull por defecto esta en true
    },

    dni:{
        type: DataTypes.STRING,
        unique:true,
        allowNull: false
    },
    correo:{
        type:DataTypes.STRING,
        allowNull: false
    },
    fecha_nacimiento:{
        type:DataTypes.DATEONLY,
    },
    password:{
        type:DataTypes.STRING,
        // allowNull:true
    },

});

User.beforeCreate (async(user)=>{
const password = user.password;
const  haspassword = await bcrypt.hash(password,10)
user.password = haspassword
})






module.exports = User;



