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
import { Users } from './pages/admin/users/users';
import { Inventory } from './pages/admin/inventory/inventory';

export const routes: Routes = [
    {path: "", component: Home, title: "Inicio"},
    {
        path: 'dashboard',
        component: Admin,
        title: 'Dashboard',
        canActivate: [authGuard],
        canActivateChild: [authGuard], //Proteger rutas hijas
        children: [
            {path: 'users', component: Users},
            {path: 'inventory', component: Inventory} //title es opcional
        ]
    },
    {path: "login", component: Login, title: "Inicio Sesión"},
    {path: "products", component: Products, title: "Productos"},
    {path: "register", component: Resgister, title: "Registro"},
    {path: "**", component: NotFound, title: "404"}
];
