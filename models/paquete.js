const { model, Schema } = require('mongoose');

const paqueteSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: [true, 'The ID is required'],
        maxlength: [3, 'Max 3 characters'],
        minlength: [1, 'Min 1 character']
    },
    nombre: {
        type: String,
        required: [true, 'The name is required'],
    },
    valor: {
        type: Number,
        required: [true, 'The price is required'],
    },
    descripcion: {
        type: String,
        required: [true, 'The description is required'],
    }
});

module.exports = model('Paquete', paqueteSchema, 'paquete');
