import Rol from '../models/rol'

export const crearRoles = async () => {
    try{
        const count = await Rol.estimatedDocumentCount()
            if(count > 0) return

            await Promise.all([
                new Rol({name: "user"}).save(),
                new Rol({name: "admin"}).save()
            ]);
    } catch (error){
        console.error(error);
    }
    
}