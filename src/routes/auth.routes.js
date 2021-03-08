import {Router} from 'express';
const router = Router();

import * as authCtrl from '../controllers/auth.controller'
import { verifySignup } from "../middlewares";

router.post('/signup',[verifySignup.chechRolesExisted, verifySignup.checkDuplicateUsernameOrEmail] ,authCtrl.signUp)
router.post('/signin', [verifySignup.chechRolesExisted, verifySignup.checkDuplicateUsernameOrEmail],authCtrl.signIn)

export default router