import {Router} from 'express'
import * as cupontCtrl from '../controllers/cupones.controller'

const router = Router()

router.get('/',  cupontCtrl.obtenerCupon);
router.post('/',  cupontCtrl.crearCupon);
router.get('/:cuponId',  cupontCtrl.obtenerCuponPorId);
router.put('/:cuponId',  cupontCtrl.actualizarCupon);
router.get('/:cuponId',  cupontCtrl.borrarCupon);

export default router;