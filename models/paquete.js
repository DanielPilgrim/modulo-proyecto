const {model, Schema} = require('mongoose')

const paqueteSchema = new Schema({
    id:{
        type:Number,//tipo de dato
        unique:true,//unico
        required:[true, 'the id is required'],//es obligatorio
        maxlength:[3,'max 3 characters'],//maximo
        minlength:[1,'min 1 characters']//minimo
    },
    nombre:{
        type:String,//tipo de dato
        required:[true, 'the name is required'],//es obligatorio
    },
    valor:{
        type:Number,//tipo de dato
        required:[true, 'the price is required'],//es obligatorio

    },
    descripcion:{
        type:String,//tipo de dato
        required:[true, 'the description is required'],//es obligatorio
    }
}
)

module.exports = model('paquete', paqueteSchema, 'paquete'); //crea la coleccion si no existe 