const { model, Schema } = require('mongoose');

const facturaSchema = new Schema({
    fecha: {
        type: Date,
        required: [true, 'The date is required'],
    },
    estado: {
        type: String,
        required: [true, 'The state is required'],
    }
});

module.exports = model('FacturaVenta', facturaSchema, 'factura_venta');
