import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/sequelize';

export class CategoriaModel extends Model {}

CategoriaModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    tableName: 'categorias',
    timestamps: false
  }
);