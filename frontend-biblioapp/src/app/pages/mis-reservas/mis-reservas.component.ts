import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Reserva } from '../../models/reserva.model';
import { Usuario } from '../../models/usuario.model';
import { ReservaService } from '../../services/reserva.service';

@Component({
  selector: 'app-mis-reservas',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent implements OnInit {
  reservas: Reserva[] = [];
  displayedColumns: string[] = ['id', 'libro_id', 'estado', 'acciones'];
  usuario!: Usuario;

  constructor(
    private reservaService: ReservaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const usuarioGuardado = localStorage.getItem('usuario');

    if (!usuarioGuardado) {
      this.router.navigate(['/login']);
      return;
    }

    this.usuario = JSON.parse(usuarioGuardado);
    this.cargarReservas();
  }

  cargarReservas(): void {
    this.reservaService.getAll().subscribe({
      next: (data) => {
        this.reservas = data.filter(reserva => reserva.usuario_id === this.usuario.id);
      },
      error: (error) => {
        console.error('Error al cargar reservas', error);
      }
    });
  }

  cancelar(id: number): void {
    this.reservaService.cancelar(id).subscribe({
      next: () => {
        alert('Reserva cancelada');
        this.cargarReservas();
      },
      error: (error) => {
        console.error('Error al cancelar reserva', error);
        alert('No se pudo cancelar la reserva');
      }
    });
  }

  devolver(id: number): void {
    this.reservaService.devolver(id).subscribe({
      next: () => {
        alert('Libro devuelto');
        this.cargarReservas();
      },
      error: (error) => {
        console.error('Error al devolver libro', error);
        alert('No se pudo devolver el libro');
      }
    });
  }

  volverCatalogo(): void {
    this.router.navigate(['/catalogo']);
  }
}