import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/sequelize';

export class ReservaModel extends Model {}

ReservaModel.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    usuario_id: { type: DataTypes.INTEGER, allowNull: false },
    libro_id: { type: DataTypes.INTEGER, allowNull: false },
    fecha_reserva: { type: DataTypes.DATE },
    fecha_devolucion: { type: DataTypes.DATE },
    estado: { type: DataTypes.STRING }
  },
  {
    sequelize,
    tableName: 'reservas',
    timestamps: false
  }
);