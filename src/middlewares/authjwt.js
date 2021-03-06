import jwt from 'jsonwebtoken'
import usuariosModel from '../models/usurios'
import Rol from '../models/rol'
import config from '../config'

export const verificarToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
    
        if(!token) return res.status(403).jspn({message: "no se encontro token"})
        
        const decodificado = jwt.verify(token, config.SECRET)
        req.userId = decodificado.id;
        
        const verificarUsuario = await usuariosModel.findById(req.userId, {password: 0})
        if(!verificarUsuario) return res.status(404).json({message: "usuario no encontrado"}) 
        next();
    } catch (error) {
        return res.status(401).json({message: "accion no autorizada"});
    }
}

export const esAdmin = async (req, res, next) =>{
    const usuario = await usuariosModel.findById(req.userId);
    const roles = await Rol.find({ _id: { $in: usuario.roles } });
    for(let i = 0; i < roles.length; i++){
        if(roles[i].name === "admin"){
            next();
            return;
        }
        
    }
    return res.status(403).json({message: "requiere permisos"})
};