import {ROLES} from '../models/rol'
import usuarioModel from '../models/usurios'

export const verificarduplicados = async (req,res,next) => {
    const usuario = usuarioModel.findOne({userame: req.body.username})
     if(usuario) return res.status(400).json({message: "el usuario ya existe"})

     const email = usuarioModel.findOne({email: req.body.email})
     if(email) return res.status(400).json({message: "el correo ya existe"})

     next()
    }

export const verificarRoles = (req,res,next) => {
    if(req.body.roles) {
        for(let i =0; i < req.body.roles.length; i++ ){
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({
                    message: "El rol que intenta registrar no existe"
                })
            }
        }
    }
    next()
}