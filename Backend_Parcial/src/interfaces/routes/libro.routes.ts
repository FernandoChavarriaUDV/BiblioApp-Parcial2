import { Router } from 'express';
import { LibroController } from '../controllers/libro.controller';

const router = Router();

router.get('/', LibroController.getAll);
router.get('/disponibles', LibroController.getDisponibles);
router.post('/', LibroController.create);
router.put('/:id', LibroController.update);
router.delete('/:id', LibroController.delete);

export default router;