import { Router } from 'express';
import { validation } from '../../middlewares/validation';
import { login } from './authController';
import { loginSchema } from './schemas';

const router = Router();

router.post('/login', validation(loginSchema), login);

export { router as authRouter };
