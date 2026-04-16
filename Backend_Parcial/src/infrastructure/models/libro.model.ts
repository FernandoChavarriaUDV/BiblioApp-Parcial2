import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/sequelize';

export class LibroModel extends Model {}

LibroModel.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    titulo: { type: DataTypes.STRING, allowNull: false },
    isbn: { type: DataTypes.STRING, allowNull: false },
    anio_publicacion: { type: DataTypes.INTEGER },
    categoria_id: { type: DataTypes.INTEGER, allowNull: false },
    stock: { type: DataTypes.INTEGER, allowNull: false }
  },
  {
    sequelize,
    tableName: 'libros',
    timestamps: false
  }
);