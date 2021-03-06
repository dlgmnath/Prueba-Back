import usuariosModel from '../models/usurios'
import Rol from '../models/rol'
import jwt from 'jsonwebtoken'
import config from '../config'

export const singUp = async (req,res) => {
    const { username, email, password , roles } =  req.body;  

    // const usuarioEncontrado = usuariosModel.find({email})

    const nuevoUsuario = new usuariosModel({
        username,
        email,
        password: await usuariosModel.encryptPassword(req.body.password)
    });

    if(roles) {
        const rolEncontrado = await Rol.find({ name: {$in: roles}});
        nuevoUsuario.roles = rolEncontrado.map(role => role._id);
    } else {
        const rol = await Rol.findOne({name: "user"});
        nuevoUsuario.roles = [rol._id]
    }

    const usuarioGuardado = nuevoUsuario.save()
    const token = jwt.sign({id: usuarioGuardado._id },config.SECRET,{
        expiresIn: 345600 // 4 dias parametrizable
    });
    res.status(200).json(nuevoUsuario);
}


export const singIn = async (req,res) => {
    const usuarioEncontrado = await usuariosModel.findOne({ email: req.body.email }).populate(
        "roles"
      );
    if(!usuarioEncontrado) return res.status(400).json({message: "usuario no encontrado"})
    const comparar = await usuariosModel.comparePassword(req.body.password, usuarioEncontrado.password)
    if(!comparar) return res.status(401).json({token: null, message: 'contraseña invalida'})

    const token = jwt.sign({id: usuarioEncontrado._id},config.SECRET,{
        expiresIn: 345600
    })
    res.json({ token })

}


