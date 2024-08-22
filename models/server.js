require('dotenv').config();
const Server = require('./models/server');
const dbConnect = require('../database/config');
const express = require('express');
const { getFactura, postFactura } = require('./controller/facturaController');
const { getPaquete, postPaquete } = require('./controller/paqueteController');

class Server {
    constructor() {
        this.app = express();
        this.dbConnection();
        this.pathFactura = '/api/factura';
        this.pathPaquete = '/api/paquete';
        this.middlewares(); // Añadir middlewares
        this.routes();
        this.listen();
    }

    async dbConnection() {
        await dbConnect();
    }

    middlewares() {
        this.app.use(express.json()); // Para recibir y manejar JSON
    }

    routes() {
        this.app.get(this.pathFactura, getFactura);
        this.app.post(this.pathFactura, postFactura);
        this.app.get(this.pathPaquete, getPaquete);
        this.app.post(this.pathPaquete, postPaquete);
    }

    listen() {
        this.app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT || 3000}`);
        });
    }
}

module.exports = Server;


