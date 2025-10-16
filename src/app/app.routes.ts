import { Routes } from '@angular/router';
// 1. Importar todos nuestros componentes página
import { Home } from './pages/home/home';
import { Admin } from './pages/admin/admin';
import { Login } from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';
import { Products } from './pages/products/products';
import { Resgister } from './pages/resgister/resgister';
// importar el guardian y especificar qué rutas son protegidas
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path: "", component: Home, title: "Inicio"},
    {path: "dashboard", component: Admin, title: "Dashboard", canActivate: [authGuard]},
    {path: "login", component: Login, title: "Inicio Sesión"},
    {path: "products", component: Products, title: "Productos"},
    {path: "register", component: Resgister, title: "Registro"},
    {path: "**", component: NotFound, title: "404"}
];
