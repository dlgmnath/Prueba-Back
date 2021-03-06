import {Router} from 'express'
import * as AuthCtrl from '../controllers/auth.controller'
const router = Router()

router.post('/singup', AuthCtrl.singUp)
router.post('/singin', AuthCtrl.singIn)
export default router;