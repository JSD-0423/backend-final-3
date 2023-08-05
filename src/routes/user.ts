import { Router } from 'express';
import { validationMiddleware } from '@middlewares/validation';
import { CreateUserDto, LoginUserDto } from '@dtos/userDto';
import { getUser, login, signup, logout } from '@controllers/user';

const router = Router();

router.route('/:userId').get(getUser);

router
  .route('/signup')
  .post(validationMiddleware(CreateUserDto, 'body'), signup);

router.route('/login').post(validationMiddleware(LoginUserDto, 'body'), login);
router.route('/logout').get(logout);

export default router;
