const mongoose = require('mongoose');

const ProductosSchema = mongoose.Schema({
    categoria: {
        type: String,
        trim: true,
        required: true
    },
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
    descripcion: {
        type: String,
        trim: true,
        required: true
    },
    stock: {
        type: Number,
    },
    img:[{
        type: String
    }],
    registro: {
        type: Date,
        default: Date.now(),
    },

})

module.exports = mongoose.model('Productos', ProductosSchema);
