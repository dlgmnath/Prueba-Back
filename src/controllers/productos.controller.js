import productosModel from '../models/productos'

export const crearProducto = async (req,res) => {
    const { name} = req.body;
    const nuevoProducto = new productosModel({ name })
    const productoGuardado = await nuevoProducto.save();
    res.status(201).json(productoGuardado)
}

export const obtenerProducto = async (req,res) => {
    const productos = await productosModel.find()
    res.json(productos)
}

export const obtenerProductoPorId = async (req,res) => {
    const producto = await productosModel.findById(req.params.productoId);
    res.status(200).json(cupon);
}

export const actualizarProducto = async (req,res) => {
    const productoActualizado = await productosModel.findByIdAndUpdate(req.params.productoId, req.body,{
        new: true
    });
    res.status(200).json(productoActualizado)
}

export const borrarProducto = async (req,res) => {
    const productoBorrado = await productosModel.findByIdAndDelete(req.params.productoId)
    res.status(204).json()
}