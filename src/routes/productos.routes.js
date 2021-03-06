import {Router} from 'express'
import * as productCtrl from '../controllers/productos.controller'
import { authjwt } from '../middlewares';

const router = Router()

router.get('/',  productCtrl.obtenerProducto);
router.post('/', [authjwt.verificarToken, authjwt.esAdmin],  productCtrl.crearProducto);
router.get('/:productoId',  productCtrl.obtenerProductoPorId);
router.put('/:productoId',  [authjwt.verificarToken, authjwt.esAdmin], productCtrl.actualizarProducto);
router.delete('/:productoId', [authjwt.verificarToken, authjwt.esAdmin], productCtrl.borrarProducto);

export default router;