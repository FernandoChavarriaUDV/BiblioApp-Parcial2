import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { MisReservasComponent } from './pages/mis-reservas/mis-reservas.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'mis-reservas', component: MisReservasComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];