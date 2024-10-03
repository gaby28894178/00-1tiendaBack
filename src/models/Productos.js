const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

// Definimos el modelo de Producto
const Producto = sequelize.define('producto', {
    // Definimos las columnas aquí
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true // Por defecto es true, pero se puede especificar
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true // Por defecto es true, pero se puede especificar
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: true // Por defecto es true, pero se puede especificar
    },
    urlImagen: {
        type: DataTypes.STRING, // Cambiado a STRING para almacenar URLs
        allowNull: true // Por defecto es true, pero se puede especificar
    },
    cantidad: {
        type: DataTypes.INTEGER, // Cambiado a INTEGER
        allowNull: true // Por defecto es true, pero se puede especificar
    },
    
});

module.exports = Producto;
