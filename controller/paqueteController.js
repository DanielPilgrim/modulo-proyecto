const paquete = require('../models/paquete')

const getPaquete = async(req,res) => {
    const paquetes = await paquete.find()
    res.json(paquetes)
}

const postPaquete = async(req,res) => {
    let msg = 'paquete inserted'
    const body =req.body
    try{
        const paquete = new paquete(body)
        await paquete.save()
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}

const putPaquete =  async (req, res)=>{
    let msg = 'paquete updated'
    const {id, nombre, valor, descripcion} = req.body
    try {
        await paquete.findOneAndUpdate({id:id}, {nombre:nombre}, {valor:valor}, {descripcion:descripcion})
    }catch (error){
        msg = error
    }
    res.json({msg:msg})
}

const deletePaquete = async (req,res)=>{
    let msg = 'paquete deleted'
    id = req.params.id
    try {
        await paquete.findOneAndDelete({_id:id})
    }catch (error){
        msg = 'There was an error deleting the paquete'
    }
    res.json({msg:msg})
}

module.exports = {
    getPaquete,
    postPaquete,
    putPaquete,
    deletePaquete
}