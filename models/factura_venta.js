const {model, Schema} = require('mongoose')

const facturaSchema = new Schema({
    fecha:{
        type:Date,//tipo de dato
        required:[true, 'the date is required'],//es obligatorio
    },
    estado:{
        type:String,//tipo de dato
        required:[true, 'the state is required'],//es obligatorio
    }
}
)

module.exports = model('factura_venta', facturaSchema, 'factura_venta'); //crea la coleccion si no existe 
