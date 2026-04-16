import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Libro } from '../../models/libro.model';
import { Usuario } from '../../models/usuario.model';
import { LibroService } from '../../services/libro.service';
import { ReservaService } from '../../services/reserva.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  libros: Libro[] = [];
  displayedColumns: string[] = ['id', 'titulo', 'isbn', 'stock_disponible', 'acciones'];

  constructor(
    private libroService: LibroService,
    private reservaService: ReservaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarLibrosDisponibles();
  }

  cargarLibrosDisponibles(): void {
    this.libroService.getDisponibles().subscribe({
      next: (data) => {
        this.libros = data;
      },
      error: (error) => {
        console.error('Error al cargar libros disponibles', error);
      }
    });
  }

  reservar(libroId: number): void {
    const usuarioGuardado = localStorage.getItem('usuario');

    if (!usuarioGuardado) {
      alert('Debe iniciar sesión');
      this.router.navigate(['/login']);
      return;
    }

    const usuario: Usuario = JSON.parse(usuarioGuardado);

    this.reservaService.create({
      usuario_id: usuario.id,
      libro_id: libroId
    }).subscribe({
      next: () => {
        alert('Reserva realizada con éxito');
        this.cargarLibrosDisponibles();
      },
      error: (error) => {
        console.error('Error al reservar libro', error);
        alert('No se pudo realizar la reserva');
      }
    });
  }

  irMisReservas(): void {
    this.router.navigate(['/mis-reservas']);
  }

  cerrarSesion(): void {
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }
}