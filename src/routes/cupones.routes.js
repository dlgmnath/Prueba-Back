import {Router} from 'express'
import * as cupontCtrl from '../controllers/cupones.controller'
import { authjwt } from '../middlewares';

const router = Router()

router.get('/',  cupontCtrl.obtenerCupon);
router.post('/', [authjwt.verificarToken, authjwt.esAdmin],  cupontCtrl.crearCupon);
router.get('/:cuponId',  cupontCtrl.obtenerCuponPorId);
router.put('/:cuponId',  [authjwt.verificarToken, authjwt.esAdmin], cupontCtrl.actualizarCupon);
router.delete('/:cuponId', [authjwt.verificarToken, authjwt.esAdmin], cupontCtrl.borrarCupon);

export default router;