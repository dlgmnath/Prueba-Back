import cuponesModel from '../models/cupones'

export const crearCupon = async (req,res) => {
    const { name, descriptios, product_is , valid_since, valid_until } = req.body;
    const nuevoCupon = new cuponesModel({ name, descriptios, product_is , valid_since, valid_until })
    const cuaposGuardado = await nuevoCupon.save();
    res.status(201).json(cuaposGuardado)
}

export const obtenerCupon = async (req,res) => {
    const cupones = await cuponesModel.find()
    res.json(cupones)
}

export const obtenerCuponPorId = async (req,res) => {
    const cupon = await cuponesModel.findById(req.params.cuponId);
    res.status(200).json(cupon);
}

export const actualizarCupon = async (req,res) => {
    const cuponActualizado = await cuponesModel.findByIdAndUpdate(req.params.cuponId, req.body,{
        new: true
    });
    console.log(req.params)
    console.log(req.body)
    res.status(200).json(cuponActualizado)
}

export const borrarCupon = async (req,res) => {
    const cuponBorrado = await cuponesModel.findByIdAndDelete(req.params.cuponId)
    res.status(204).json()
}