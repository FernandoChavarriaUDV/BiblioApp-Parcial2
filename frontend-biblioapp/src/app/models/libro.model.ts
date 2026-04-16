export interface Libro {
  id?: number;
  titulo: string;
  isbn: string;
  anio_publicacion: number;
  categoria_id: number;
  stock: number;
  stock_disponible?: number;
}