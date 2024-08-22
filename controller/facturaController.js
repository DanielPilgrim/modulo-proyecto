const FacturaVenta = require('../models/factura_venta');

const getFactura = async (req, res) => {
    const facturas = await FacturaVenta.find();
    res.json(facturas);
}

const postFactura = async (req, res) => {
    let msg = 'Factura inserted';
    const body = req.body;
    try {
        const factura = new FacturaVenta(body);
        await factura.save();
    } catch (error) {
        msg = error.message;
    }
    res.json({ msg });
}

const putFactura = async (req, res) => {
    let msg = 'Factura updated';
    const { fecha, estado } = req.body;
    try {
        await FacturaVenta.findOneAndUpdate({ fecha }, { estado });
    } catch (error) {
        msg = error.message;
    }
    res.json({ msg });
}

const deleteFactura = async (req, res) => {
    let msg = 'Factura deleted';
    const id = req.params.id;
    try {
        await FacturaVenta.findOneAndDelete({ _id: id });
    } catch (error) {
        msg = 'There was an error deleting the factura';
    }
    res.json({ msg });
}

module.exports = {
    getFactura,
    postFactura,
    putFactura,
    deleteFactura
}
