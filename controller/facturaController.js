const factura_venta = require('../models/factura_venta')

const getFactura = async(req,res) => {
    const facturas = await factura_venta.find()
    res.json(facturas)
}

const postFactura = async(req,res) => {
    let msg = 'factura inserted'
    const body =req.body
    try{
        const factura = new factura(body)
        await factura_venta.save()
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}

module.exports = {
    getFactura,
    postFactura
}