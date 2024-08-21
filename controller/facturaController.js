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

const putFactura =  async (req, res)=>{
    let msg = 'factura updated'
    const {fecha, estado} = req.body
    try {
        await factura_venta.findOneAndUpdate({fecha:fecha}, {estado:estado})
    }catch (error){
        msg = error
    }
    res.json({msg:msg})
}

const deleteFactura = async (req,res)=>{
    let msg = 'factura deleted'
    id = req.params.id
    try {
        await factura_venta.findOneAndDelete({_id:id})
    }catch (error){
        msg = 'There was an error deleting the factura'
    }
    res.json({msg:msg})
}

module.exports = {
    getFactura,
    postFactura,
    putFactura,
    deleteFactura
}