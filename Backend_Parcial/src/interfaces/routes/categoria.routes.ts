import { Router } from 'express';
import { CategoriaController } from '../controllers/categoria.controller';

const router = Router();

router.get('/', CategoriaController.getAll);
router.post('/', CategoriaController.create);

export default router;