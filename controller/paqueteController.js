const Paquete = require('../models/paquete');

const getPaquete = async (req, res) => {
    const paquetes = await Paquete.find();
    res.json(paquetes);
}

const postPaquete = async (req, res) => {
    let msg = 'Paquete inserted';
    const body = req.body;
    try {
        const paquete = new Paquete(body);
        await paquete.save();
    } catch (error) {
        msg = error.message;
    }
    res.json({ msg });
}

const putPaquete = async (req, res) => {
    let msg = 'Paquete updated';
    const { id, nombre, valor, descripcion } = req.body;
    try {
        await Paquete.findOneAndUpdate({ id }, { nombre, valor, descripcion });
    } catch (error) {
        msg = error.message;
    }
    res.json({ msg });
}

const deletePaquete = async (req, res) => {
    let msg = 'Paquete deleted';
    const id = req.params.id;
    try {
        await Paquete.findOneAndDelete({ _id: id });
    } catch (error) {
        msg = 'There was an error deleting the paquete';
    }
    res.json({ msg });
}

module.exports = {
    getPaquete,
    postPaquete,
    putPaquete,
    deletePaquete
}
