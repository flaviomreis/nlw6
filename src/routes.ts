import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { adminAuthorization } from './middlewares/adminAuthorization';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { verifyAuthentication } from './middlewares/verifyAuthentication';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createCommplimentController = new CreateComplimentController();

router.post('/users', createUserController.handle);
router.post('/tags', verifyAuthentication, adminAuthorization, createTagController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/compliments', createCommplimentController.handle);

export { router };