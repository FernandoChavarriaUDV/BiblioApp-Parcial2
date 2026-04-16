import express from 'express';
import cors from 'cors';
import categoriaRoutes from './interfaces/routes/categoria.routes';
import libroRoutes from './interfaces/routes/libro.routes';
import reservaRoutes from './interfaces/routes/reserva.routes';

const app = express();

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(express.json());

app.use('/api/categorias', categoriaRoutes);
app.use('/api/libros', libroRoutes);
app.use('/api/reservas', reservaRoutes);

export default app;