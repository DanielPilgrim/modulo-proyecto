const express = require('express');
const dbConnect = require('../database/config')
require('../database/config')
const {getFactura,postFactura} = require('../controller/facturaController')
const {getPaquete,postPaquete} = require('../controller/paqueteController')

class Server {
    constructor(){
        this.app = express();
        this.dbConnection(); 
        this.pathFactura = '/api/factura';
        this.pathPaquete = '/api/paquete';
        this.route();
        this.listen();
    }

    async dbConnection(){  //llamar la coneccion de la base de datos
        await dbConnect;
    }
    route(){
        this.app.use(express.json())
        this.app.get(this.pathFactura, getFactura)
        this.app.post(this.pathFactura, postFactura)
        //////////////////////////////////////////////////
        this.app.get(this.pathPaquete, getPaquete)
        this.app.post(this.pathPaquete, postPaquete)
    }
    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log('server is running')
        })
    }
}

module.exports = Server; // exportar la calse server

