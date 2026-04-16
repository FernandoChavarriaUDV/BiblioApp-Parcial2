import { Router } from 'express';
import { ReservaController } from '../controllers/reserva.controller';

const router = Router();

router.get('/', ReservaController.getAll);
router.post('/', ReservaController.create);
router.put('/:id/cancelar', ReservaController.cancelar);
router.put('/:id/devolver', ReservaController.devolver);

export default router;