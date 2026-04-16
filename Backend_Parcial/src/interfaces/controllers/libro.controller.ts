import { Request, Response } from 'express';
import { LibroModel } from '../../infrastructure/models/libro.model';
import { ReservaModel } from '../../infrastructure/models/reserva.model';

export class LibroController {
  static async getAll(req: Request, res: Response) {
    try {
      const data = await LibroModel.findAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener libros', error });
    }
  }

  static async getDisponibles(req: Request, res: Response) {
    try {
      const libros = await LibroModel.findAll();
      const disponibles: any[] = [];

      for (const libro of libros) {
        const reservas = await ReservaModel.count({
          where: {
            libro_id: libro.get('id') as number,
            estado: 'ACTIVA'
          }
        });

        const stock = Number(libro.get('stock'));

        if (reservas < stock) {
          disponibles.push(libro);
        }
      }

      res.json(disponibles);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener libros disponibles', error });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const data = await LibroModel.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear libro', error });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await LibroModel.update(req.body, {
        where: { id }
      });

      res.json({ message: 'Libro actualizado' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar libro', error });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await LibroModel.destroy({
        where: { id }
      });

      res.json({ message: 'Libro eliminado' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar libro', error });
    }
  }
}