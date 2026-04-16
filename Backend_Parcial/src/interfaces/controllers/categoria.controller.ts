import { Request, Response } from 'express';
import { CategoriaModel } from '../../infrastructure/models/categoria.model';

export class CategoriaController {
  static async getAll(req: Request, res: Response) {
    const data = await CategoriaModel.findAll();
    res.json(data);
  }

  static async create(req: Request, res: Response) {
    const data = await CategoriaModel.create(req.body);
    res.json(data);
  }
}