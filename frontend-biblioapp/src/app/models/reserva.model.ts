export interface Reserva {
  id?: number;
  usuario_id: number;
  libro_id: number;
  estado?: string;
  fecha_reserva?: string;
  fecha_devolucion?: string | null;
}