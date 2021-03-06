import {Router} from 'express'
import * as usuarioCtrl from '../controllers/usuarioController'
import { authjwt, verificar } from '../middlewares';

const router = Router()

router.post('/', [authjwt.verificarToken, authjwt.esAdmin, verificar.verificarRoles],usuarioCtrl.crearUsuario)
export default router;