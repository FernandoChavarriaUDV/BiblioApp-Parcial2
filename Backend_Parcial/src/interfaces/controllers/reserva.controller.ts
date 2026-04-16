import { Request, Response } from 'express';
import { ReservaModel } from '../../infrastructure/models/reserva.model';

export class ReservaController {

  static async getAll(req: Request, res: Response) {
    const data = await ReservaModel.findAll();
    res.json(data);
  }

  static async create(req: Request, res: Response) {
    const data = await ReservaModel.create({
      ...req.body,
      estado: 'ACTIVA'
    });
    res.json(data);
  }

  static async cancelar(req: Request, res: Response) {
    const { id } = req.params;

    await ReservaModel.update(
      { estado: 'CANCELADA' },
      { where: { id } }
    );

    res.json({ message: 'Reserva cancelada' });
  }

  static async devolver(req: Request, res: Response) {
    const { id } = req.params;

    await ReservaModel.update(
      { estado: 'DEVUELTA' },
      { where: { id } }
    );

    res.json({ message: 'Libro devuelto' });
  }
}