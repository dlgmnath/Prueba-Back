import {Router} from 'express'
import * as AuthCtrl from '../controllers/auth.controller'
import { verificar } from '../middlewares'
const router = Router()

router.post('/singup', [verificar.verificarduplicados, verificar.verificarRoles] ,AuthCtrl.singUp)
router.post('/singin', AuthCtrl.singIn)
export default router;